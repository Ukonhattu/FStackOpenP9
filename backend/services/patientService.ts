import patients from '../data/patients';
import Patient, { PatientEntry } from '../types/Patient';
import {v1 as uuid} from 'uuid';

export const getAll = (): Omit<Patient, "ssn">[] => {
    return patients.map(({ssn: _, ...rest}) => rest);
};

export const addPatient = (patient: PatientEntry): Patient => {
    const newPatient = {
        ...patient,
        id: uuid()
    };
    patients.push(newPatient);
    return newPatient;
};
