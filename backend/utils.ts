import {Gender, PatientEntry} from './types/Patient';
import {Entry, HealthCheckEntry, HospitalEntry, OccupationalHealthcareEntry, HealthCheckRating} from './types/Entry';

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

export const parseEntries = (entries: unknown): Entry[] => {
    if (!entries || !Array.isArray(entries)) {
        throw new Error('Invalid or missing entries');
    }
    return entries as Entry[];
};

export const toNewEntry = (object: unknown): Entry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Invalid or missing entry');
    }
    if ('type' in object) {
        switch (object.type) {
            case 'HealthCheck': return toHealthCheckEntry(object);
            case 'OccupationalHealthcare': return toOccupationalHealthcareEntry(object);
            case 'Hospital': return toHospitalEntry(object);
            default: throw new Error('invalid entry type');
        }
    }
    throw new Error('invalid or missing entry type');
};

const toHealthCheckEntry = (object: unknown): HealthCheckEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Invalid or missing entry');
    }
    if ('type' in object && 'healthCheckRating' in object && 'description' in object
    && 'date' in object && 'specialist' in object && 'id' in object ) {
        const newEntry: HealthCheckEntry = {
            type: 'HealthCheck',
            id: parseId(object.id),
            healthCheckRating: parseHealthCheckRating(object.healthCheckRating),
            description: parseDescription(object.description),
            date: parseDate(object.date),
            specialist: parseSpecialist(object.specialist)
        };
        return newEntry;
    }
    throw new Error('Invalid or missing entry');
};

const toOccupationalHealthcareEntry = (object: unknown): OccupationalHealthcareEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Invalid or missing entry');
    }
    if ('type' in object && 'employerName' in object && 'description' in object
    && 'date' in object && 'specialist' in object && 'id' in object) {
        const newEntry: OccupationalHealthcareEntry = {
            type: 'OccupationalHealthcare',
            id: parseId(object.id),
            employerName: parseEmployerName(object.employerName),
            description: parseDescription(object.description),
            date: parseDate(object.date),
            specialist: parseSpecialist(object.specialist)
        };
        if ('sickLeave' in object) {
            newEntry.sickLeave = parseSickLeave(object.sickLeave);
        }
        return newEntry;
    }
    throw new Error('Invalid or missing entry');
};

const toHospitalEntry = (object: unknown): HospitalEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Invalid or missing entry');
    }
    if ('type' in object && 'discharge' in object && 'description' in object
    && 'date' in object && 'specialist' in object && 'id' in object) {
        const newEntry: HospitalEntry = {
            type: 'Hospital',
            id: parseId(object.id),
            discharge: parseDischarge(object.discharge),
            description: parseDescription(object.description),
            date: parseDate(object.date),
            specialist: parseSpecialist(object.specialist)
        };
        return newEntry;
    }
    throw new Error('Invalid or missing entry');
};

const parseHealthCheckRating = (healthCheckRating: unknown): HealthCheckRating => {
    if (typeof healthCheckRating === 'number') {
        switch (healthCheckRating) {
            case 0: return HealthCheckRating.Healthy;
            case 1: return HealthCheckRating.LowRisk;
            case 2: return HealthCheckRating.HighRisk;
            case 3: return HealthCheckRating.CriticalRisk;
            default: throw new Error('invalid health check rating');
        }
    }
    throw new Error('invalid or missing health check rating');
};

const parseDischarge = (discharge: unknown): {date: string, criteria: string} => {
    if (!discharge || typeof discharge !== 'object') {
        throw new Error('Invalid or missing discharge');
    }
    if ('date' in discharge && 'criteria' in discharge) {
        return {
            date: parseDate(discharge.date),
            criteria: parseCriteria(discharge.criteria)
        };
    }
    throw new Error('invalid or missing discharge');
};

const parseCriteria = (criteria: unknown): string => {
    if (!criteria || typeof criteria !== 'string') {
        throw new Error('Invalid or missing criteria');
    }
    return criteria;
};

const parseDate = (date: unknown): string => {
    if (!date || typeof date !== 'string') {
        throw new Error('Invalid or missing date');
    }
    return date;
};

const parseDescription = (description: unknown): string => {
    if (!description || typeof description !== 'string') {
        throw new Error('Invalid or missing description');
    }
    return description;
};

const parseSpecialist = (specialist: unknown): string => {
    if (!specialist || typeof specialist !== 'string') {
        throw new Error('Invalid or missing specialist');
    }
    return specialist;
};

const parseEmployerName = (employerName: unknown): string => {
    if (!employerName || typeof employerName !== 'string') {
        throw new Error('Invalid or missing employer name');
    }
    return employerName;
};

const parseSickLeave = (sickLeave: unknown): {startDate: string, endDate: string} => {
    if (!sickLeave || typeof sickLeave !== 'object') {
        throw new Error('Invalid or missing sick leave');
    }
    if ('startDate' in sickLeave && 'endDate' in sickLeave) {
        return {
            startDate: parseDate(sickLeave.startDate),
            endDate: parseDate(sickLeave.endDate)
        };
    }
    throw new Error('invalid or missing sick leave');
};

const parseId = (id: unknown): string => {
    if (!id || typeof id !== 'string') {
        throw new Error('Invalid or missing id');
    }
    return id;
};
