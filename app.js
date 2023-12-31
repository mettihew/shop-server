import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js"
import orderRoute from "./routes/orderRoute.js"
import productRoute from "./routes/productRoute.js"
import bodyParser from "body-parser"
import cors from "cors"
import morgan from "morgan"
import path from 'path'

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(morgan("dev"))

// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'https://shop-node-6chj.onrender.com');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

app.use("/", userRoute)
app.use("/", productRoute)
app.use("/", orderRoute)

mongoose
  .connect(
    "mongodb+srv://Jeff-Bezos:123jeff@cluster0.qwfgcrz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to mongoDB"))
  .catch((error) => console.log(error));

app.listen(4000, console.log("server started"));
