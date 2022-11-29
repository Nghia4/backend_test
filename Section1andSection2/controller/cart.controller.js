import { Cart } from "../models/cart.model.js"

function createCart (req, res) {
    Cart.create(req.body)
    .then((cart)=> {
        res.json(cart)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const cartController = {
    createCart
}