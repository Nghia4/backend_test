import express from 'express'
import { billingController } from '../controller/billing.controller.js'

const billingRouter = express.Router()

billingRouter.post('/create', (req, res) => {
    billingController.createBilling(req,res)
})

export default billingRouter