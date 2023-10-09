import { Router } from "express";
import * as patientService from "../services/patientService";
import { toPatient } from "../utils";

const patientRouter: Router = Router();

patientRouter.get('/', (_req, res) => {
    res.send(patientService.getAll());
});

patientRouter.post('/', (req, res) => {
    const requestBody: unknown = req.body;
    if (requestBody || typeof requestBody === 'object') {
        const newPatient = toPatient(requestBody);
        const addedPatient = patientService.addPatient(newPatient);
        res.json(addedPatient);
    } else  {
        res.status(400).send('Invalid request body');
    }

});

export default patientRouter;