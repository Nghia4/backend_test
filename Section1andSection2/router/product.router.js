import express from 'express'
import { productController } from '../controller/product.controller.js'

const productRouter = express.Router()

productRouter.post('/create', (req, res) => {
    productController.createProduct(req,res)
})

export default productRouter