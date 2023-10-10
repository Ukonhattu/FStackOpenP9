import patients from '../data/patients';
import Patient, { PatientEntry } from '../types/Patient';
import {v1 as uuid} from 'uuid';

export const getAll = (): Omit<Patient, "ssn">[] => {
    return patients.map(({ssn: _, ...rest}) => rest);
};

export const getOne = (id: string): Patient | undefined => {
    return patients.find(p => p.id === id);
};

export const addPatient = (patient: PatientEntry): Patient => {
    const newPatient = {
        ...patient,
        id: uuid(),
        entries: []
    };
    patients.push(newPatient);
    return newPatient;
};
