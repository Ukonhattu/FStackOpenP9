import express from 'express';
import { calculateExercises } from './exerciseCalculator';

type BMIString = 'Underweight' | 'Normal (healthy weight)' | 'Overweight' | 'Obese';

interface BmiResult {
  weight: string;
  height: string;
  bmi: BMIString;
}

interface ExerciseParams {
  daily_exercises: number[];
  target: number;
}

const calculateBMI = (height: number, weight: number): BmiResult => {
  const bmi = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return { weight: String(weight), height: String(height), bmi: 'Underweight' };
  } else if (bmi < 25) {
    return { weight: String(weight), height: String(height), bmi: 'Normal (healthy weight)' };
  } else if (bmi < 30) {
    return { weight: String(weight), height: String(height), bmi: 'Overweight' };
  } else {
    return { weight: String(weight), height: String(height), bmi: 'Obese' };
  }
};



const app = express();

app.get('/hello', (_, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const { height, weight } = req.query;
  if (!height || !weight) {
    res.status(400).json({ error: 'malformatted parameters' });
  }
  if (isNaN(Number(height)) || isNaN(Number(weight))) {
    res.status(400).json({ error: 'malformatted parameters' });
  }
  const bmi = calculateBMI(Number(height), Number(weight));
  res.json(bmi);
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } : ExerciseParams = req.body;
  if (!daily_exercises || !target) {
    res.status(400).json({ error: 'parameters missing' });
  }
  if (!Array.isArray(daily_exercises) || isNaN(Number(target))) {
    res.status(400).json({ error: 'malformatted parameters' });
  }
  const result = calculateExercises(daily_exercises, target);
  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
