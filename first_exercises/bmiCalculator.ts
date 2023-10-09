import {isNotNumber} from './utils';

const calculateBMI = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal (healthy weight)";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};


const parseArgsBMI = (args: Array<string>): [number, number] => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (isNotNumber(Number(args[2])) || isNotNumber(Number(args[3]))) {
        throw new Error('Provided values were not numbers!');
    }
    
    return [Number(args[2]), Number(args[3])];
};
const [height, weight] = parseArgsBMI(process.argv);

console.log(calculateBMI(height, weight));