import express from "express";
import mongoose from "mongoose";
import Product from "../Models/productModel.js";
import Cart from "../Models/cartModel.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

   
    let cart = await Cart.findOne({});

    if (!cart) {
      cart = new Cart({ products: [] });
    }

    const existingProductIndex = cart.products.findIndex(item => item.id.toString() === productId);

    if (existingProductIndex !== -1) {

      cart.products[existingProductIndex].quantity += 1;

    } else {
      cart.products.push({
        id: product._id,
        title: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        quantity: 1,
      });
    }

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Error adding product to cart", error: error.message });
  }
});

router.get('/items', async (req, res) => {
  try {
    console.log("request made..")
    const items = await Cart.find(); 
    res.status(200).json(items);
  } catch (error) {
    console.error('Error retrieving products:', error);
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    console.log("Found request to delete product with ID:", productId);
    
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const cart = await Cart.findOne({ "products.id": productId }); 
    
    if (!cart) {
      console.log("Product not found in the cart.");
      return res.status(404).json({ message: "Product not found in the cart!" });
    } else {
      console.log("Product found in the cart:", cart);
    }
    
    const result = await Cart.findOneAndUpdate(
      { "products.id": productId }, 
      { $pull: { products: { id: productId } } }, 
      { new: true }
    );
    
    if (!result) {
      return res.status(400).json({ message: "Item not found or couldn't be deleted!" });
    }
    
    return res.status(200).json({ message: "Item deleted successfully.", cart: result });
    
  } catch (error) {
    console.error("Error deleting product from cart:", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;