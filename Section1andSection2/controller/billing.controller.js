import { Billing } from "../models/billing.model.js"

function createBilling (req, res) {
    Billing.create(req.body)
    .then((billing)=> {
        res.json(billing)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const billingController = {
    createBilling
}