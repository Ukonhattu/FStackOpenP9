import {Gender, PatientEntry} from './types/Patient';

export const toPatient = (object: unknown): PatientEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Invalid or missing patient entry');
    }
    if ('name' in object && 'dateOfBirth' in object
    && 'ssn' in object && 'gender' in object && 'occupation' in object) {
        const newPatient: PatientEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation)
        };
        return newPatient;
    }
    throw new Error('Invalid or missing patient entry');
};

const parseName = (name: unknown): string => {
    if (!name || typeof name !== 'string') {
        throw new Error('Invalid or missing name');
    }
    return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if (!dateOfBirth || typeof dateOfBirth !== 'string') {
        throw new Error('Invalid or missing date of birth');
    }
    return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
    if (!ssn || typeof ssn !== 'string') {
        throw new Error('Invalid or missing ssn');
    }
    return ssn;
};

const parseGender = (gender: unknown): Gender => {
    if (typeof gender === 'string' || gender instanceof String) {
        switch (gender) {
            case 'male': return Gender.Male;
            case 'female': return Gender.Female;
            case 'other': return Gender.Other;
            default: throw new Error('invalid gender');
        }
    }
    throw new Error('invalid or missing gender');
};

const parseOccupation = (occupation: unknown): string => {
    if (!occupation || typeof occupation !== 'string') {
        throw new Error('Invalid or missing occupation');
    }
    return occupation;
};