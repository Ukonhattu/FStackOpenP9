
export const isNotNumber = (value: number): boolean => {
    return isNaN(Number(value));
};

export const isNumber = (value: number): boolean => {
    return !isNaN(Number(value));
};