import { Agency } from "../models/agency.model.js";

function createAgency (req,res) {
    Agency.create(req.body)
    .then((agency)=> {
        res.json(agency)
    })
    .catch((error) => {
        res.json(error)
    })
}

function updateAgency (req, res) {
    Agency.updateMany(req.body)
    .then((agency)=> {
        res.json(agency)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const agencyController = {
    createAgency,
    updateAgency
}