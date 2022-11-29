import express from 'express'
import { cartController } from '../controller/cart.controller.js'

const cartRouter = express.Router()

cartRouter.post('/create', (req, res) => {
    cartController.createCart(req,res)
})

export default cartRouter