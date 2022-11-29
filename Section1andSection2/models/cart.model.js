import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
})

export const Cart = mongoose.model('Cart', Schema)