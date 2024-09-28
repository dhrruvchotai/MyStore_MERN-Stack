import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from './Routes/userRoute.js'
import productRoute from './Routes/productRoutes.js'
import cartRoute from './Routes/cartRoute.js'
import cors from "cors"

const app = express();
app.use(cors());

dotenv.config();

const mongoDBURL = process.env.ConnStr;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use('/user', userRoute);
app.use('/product',productRoute);
app.use('/cart',cartRoute);



//Connection To DB
mongoose
    .connect(mongoDBURL)

.then(() => {
    console.log("Successfully Connected to Database.");

    app.listen(process.env.PORT, () => {
        console.log(`Sever is running on PORT : ${process.env.PORT}`)
    });
})

.catch((error) => {
    console.log(error);
});