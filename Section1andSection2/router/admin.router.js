import express from 'express'
import { adminController } from '../controller/admin.controller.js';
import { agencyController } from '../controller/agency.controller.js';


const adminRouter = express.Router();

adminRouter.post('/create', (req, res) => {
    adminController.createAdmin(req,res)
})

adminRouter.post('/agency/create', (req, res) => {
    agencyController.createAgency(req,res)
})

adminRouter.patch('/agency/update', (req,res) => {
    adminController.updateAgency(req,res)
})

adminRouter.get('/agencyinfo', (req,res) => {
    adminController.readAgency(req,res)
})

adminRouter.delete('/agency/:id', (req,res) => {
    adminController.deleteAgencyById(req,res)
})

export default adminRouter