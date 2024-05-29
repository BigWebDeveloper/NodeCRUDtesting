import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const product = await Product.find({});
        res.send(product);
      } catch (error) {
        res.status(500).json({ mesage: error.message });
      }
}

export const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.send(product);
    } catch (error) {
      res.status(500).json({ message: error.mesage });
    }
  }

  export const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  export const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
  
      if (!product) {
        return res.status(404).json({ message: "Product not find" });
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  export const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        return res.status(404).json({ message: error.message });
      }
      res.status(200).json({ message: "Product deleted succesfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }