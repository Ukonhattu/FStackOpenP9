import Entry from './Entry';

interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export type PatientEntry = Omit<Patient, 'id' | 'entries'>;

export default Patient;