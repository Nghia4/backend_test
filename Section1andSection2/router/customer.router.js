import express from 'express'
import { customerController } from '../controller/customer.controller.js';

const customerRouter = express.Router();

customerRouter.post('/create', (req, res) => {
    customerController.createCustomer(req,res)
})

customerRouter.patch('/update', (req,res) => {
    customerController.updateCustomer(req,res)
})

export default customerRouter