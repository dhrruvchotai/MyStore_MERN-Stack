import mongoose from "mongoose";
import User from "./userModel.js";
import Product from "./productModel.js"; 

const { productSchema } = Product; 

const cartSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    products: [productSchema], 
    totalAmount: { 
        type: Number, 
        required: true, 
        default: 0 
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
