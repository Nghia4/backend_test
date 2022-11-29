import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    agencyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency"
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
})

export const Transaction = mongoose.model('Transaction', Schema)