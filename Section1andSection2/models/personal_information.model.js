import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    adress: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phonenumber: {
        type: String,
        require: true
    },
    gender: {
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

export const PersonalInformation = mongoose.model('PersonalInformation', Schema)