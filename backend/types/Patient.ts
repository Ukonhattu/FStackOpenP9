interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export enum Gender {
    Male,
    Female,
    Other
}

export type PatientEntry = Omit<Patient, 'id'>;

export default Patient;