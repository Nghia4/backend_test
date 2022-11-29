import express from 'express'
import { agencyController } from '../controller/agency.controller.js'

const agencyRouter = express.Router();

agencyRouter.post('/create', (req, res) => {
    agencyController.createAgency(req,res)
})

agencyRouter.patch('/update', (req,res) => {
    agencyController.updateAgency(req,res)
})

export default agencyRouter