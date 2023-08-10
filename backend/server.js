import express from "express";
import dotenv from "dotenv";

import db from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/products", productRoutes); 

app.use(notFound);
app.use(errorHandler);



db();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
