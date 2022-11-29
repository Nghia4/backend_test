import express from 'express'
import { personalInformationController } from '../controller/personal_information.controller.js'

const personRouter = express.Router()

personRouter.post('/create', (req, res) => {
    personalInformationController.createPersonalInfomation(req,res)
})

export default personRouter