import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/product.route.js";

dotenv.config();
export default app = express();
const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;



// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// routes
app.use("/api/products", router);

app.get("/", async (req, res) => {
  res.send("Hello from server API");
});


// connect to database 
mongoose
  .connect(URL)
  .then(() => {
    console.log("connected to the database");

    app.listen(PORT, () => {
      console.log(`server is working on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
