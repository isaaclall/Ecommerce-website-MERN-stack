import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productsRoute.js"

dotenv.config()

connectDB()

const app = express()

app.get("/", (req, res) => {
  res.send("API is runnin..")
})

app.use("/api/products", productRoutes)

const port = process.env.PORT || 5000

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} port ${port}`)
)
