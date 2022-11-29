import { Admin } from "../models/admin.model.js";
import { Agency } from "../models/agency.model.js";

function createAdmin (req, res) {
    Admin.create(req.body)
    .then((admin)=> {
        res.json(admin)
    })
    .catch((error) => {
        res.json(error)
    })
}


function readAgency (req, res )  {
    Agency.find().populate('productId').populate("transactionId").populate('personId').populate('billingId')
    .then((agency) => {
        res.json(agency)
    })
    .catch((error) => {
        res.json(error)
    })
}


function updateAgency (req, res )  {
    const updateAdmin = req.body
    Agency.findOneAndUpdate({_id : updateAdmin._id}, updateAdmin, {new: true})
    .then((agency) => {
        res.json(agency)
    })
    .catch((error) => {
        res.json(error)
    })
}

function deleteAgencyById (req, res) {
    const id = req.params.id
    Agency.findByIdAndDelete(id)
    .then((agency) => {
        res.json(agency)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const adminController = {
    createAdmin,
    readAgency,
    updateAgency,
    deleteAgencyById
}