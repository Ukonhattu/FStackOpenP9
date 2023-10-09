import diagnoses from "../data/diagnoses";
import Diagnosis from "../types/Diagnosis";   

export const getAll = (): Diagnosis[] => {
    return diagnoses;
};
