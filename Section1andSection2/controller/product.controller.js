import { Product } from "../models/product.model.js"

function createProduct (req, res) {
    Product.create(req.body)
    .then((product)=> {
        res.json(product)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const productController = {
    createProduct
}