import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true}, 
    title: { type: String, required: true },          
    price: { type: Number, required: true },           
    description: { type: String, required: true },    
    images: [{ type: String }],                        
    creationAt: { type: Date, default: Date.now },     
    updatedAt: { type: Date, default: Date.now },      
});

productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;
