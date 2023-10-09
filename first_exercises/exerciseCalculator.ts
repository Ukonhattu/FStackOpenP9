import { isNotNumber } from "./utils";

interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: Rating;
    ratingDescription: RatingDescription
    target: number;
    average: number;
}

type RatingDescription = "bad" | "not too bad but could be better" | "good";
type Rating = 1 | 2 | 3;

const getRatingDescription = (rating: Rating): RatingDescription => {
    switch (rating) {
        case 1:
            return "bad";
        case 2:
            return "not too bad but could be better";
        case 3:
            return "good";
        default:
            throw new Error("Invalid rating");
    }
};

const getRating = (average: number, target: number): Rating => {
    if (average < target) {
        return 1;
    } else if (average === target) {
        return 2;
    } else {
        return 3;
    }
};

const calculateExercises = (exerciseHours: number[], target: number): Result => {
    const periodLength = exerciseHours.length;
    const trainingDays = exerciseHours.filter(hours => hours > 0).length;
    const average = exerciseHours.reduce((a, b) => a + b) / periodLength;
    const success = average >= target;
    const rating = getRating(average, target);
    const ratingDescription = getRatingDescription(rating);
    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average
    };
};

const parseArgsExercise = (args: Array<string>): { target: number, exerciseHours: number[] } => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length === 4) throw new Error('No exercise hours provided');

    const target = Number(args[2]);
    const exerciseHours = args.slice(3).map(arg => {
        if (isNotNumber(Number(arg))) {
            throw new Error('Provided values were not numbers!');
        }
        return Number(arg);
    });

    return { target, exerciseHours };
};

const { target, exerciseHours } = parseArgsExercise(process.argv);

console.log(calculateExercises(exerciseHours, target));

export { calculateExercises };

