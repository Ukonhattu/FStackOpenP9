import { Router } from "express";
import * as patientService from "../services/patientService";
import { toPatient } from "../utils";

const patientRouter: Router = Router();

patientRouter.get('/', (_req, res) => {
    res.send(patientService.getAll());
});

patientRouter.get('/:id', (req, res) => {
    const patient = patientService.getOne(req.params.id);
    if (patient) {
        res.send(patient);
    } else {
        res.status(404).send('Patient not found');
    }
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