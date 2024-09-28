import express from 'express';
import Product from '../Models/productModel.js';
import Cart from '../Models/cartModel.js'

const router = express.Router();

router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' }); 
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error retrieving product:', error); 
        res.status(500).json({ message: 'Error retrieving product', error: error.message });
    }
});

export default router;
