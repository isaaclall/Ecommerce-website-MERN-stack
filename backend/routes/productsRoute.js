import express from "express"
import asyncHandler from "express-Async-Handler"
const router = express.Router()
import Product from "../models/productModel.js"

//Fetch all products

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error("Product Not Found")
    }
  })
)

export default router
