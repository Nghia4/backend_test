import express from 'express'
import { transactionController } from '../controller/transaction.controller.js'

const transactionRouter = express.Router()

transactionRouter.post('/create', (req, res) => {
    transactionController.createTransaction(req,res)
})

export default transactionRouter