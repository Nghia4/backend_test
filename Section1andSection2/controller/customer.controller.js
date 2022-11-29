import { Customer } from "../models/customer.model.js";

function createCustomer (req,res) {
    Customer.create(req.body)
    .then((customer)=> {
        res.json(customer)
    })
    .catch((error) => {
        res.json(error)
    })
}

function updateCustomer (req, res) {
    Customer.updateMany(req.body)
    .then((customer)=> {
        res.json(customer)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const customerController = {
    createCustomer,
    updateCustomer
}