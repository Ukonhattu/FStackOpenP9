import express, {Express} from 'express';
import cors from 'cors';
import diagnosisRouter from './routers/diagnosis';
import patientRouter from './routers/patient';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses', diagnosisRouter);
app.use('/api/patients', patientRouter);

app.listen(3003, () => {
    console.log('Server is running at port 3003');
});