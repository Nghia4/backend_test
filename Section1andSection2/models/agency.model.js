import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    productId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    personId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PersonalInformation"
    }],
    transactionId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }],
    billingId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Billing"
    }],
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    }
})
export const Agency = mongoose.model('Agency', Schema)