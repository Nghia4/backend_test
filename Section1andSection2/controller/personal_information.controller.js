import { PersonalInformation } from "../models/personal_information.model.js"

function createPersonalInfomation (req, res) {
    PersonalInformation.create(req.body)
    .then((person)=> {
        res.json(person)
    })
    .catch((error) => {
        res.json(error)
    })
}

export const personalInformationController = {
    createPersonalInfomation
}