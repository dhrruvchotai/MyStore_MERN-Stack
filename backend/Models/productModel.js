import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true }, // Unique ID for each product
    title: { type: String, required: true },           // Product title
    price: { type: Number, required: true },           // Product price
    description: { type: String, required: true },     // Product description
    images: [{ type: String }],                         // Array of image URLs
    creationAt: { type: Date, default: Date.now },     // Timestamp for when the product was created
    updatedAt: { type: Date, default: Date.now },      // Timestamp for the last update
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' } // Reference to Category model
});

const Product = mongoose.model('Product', productSchema);

export default Product;
