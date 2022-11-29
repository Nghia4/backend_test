import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    agencyId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Agency"
    }],
})

export const Admin = mongoose.model('Admin', Schema)