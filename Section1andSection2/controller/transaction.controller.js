import { Transaction } from "../models/transaction.model.js";

function createTransaction (req, res) {
    Transaction.create(req.body)
    .then((transaction)=> {
        res.json(transaction)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const transactionController = {
    createTransaction
}