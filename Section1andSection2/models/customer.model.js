import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    personalId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PersonalInformation"
    }],
    cartId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart"
    }],
    transactionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }],
    billingId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Billing"
    }],
})

export const Customer = mongoose.model('Customer', Schema)