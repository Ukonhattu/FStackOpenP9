import { Router } from "express";
import * as diagnosisService from "../services/diagnosisService";

const diagnosisRouter: Router = Router();

diagnosisRouter.get('/', (_req, res) => {
    res.send(diagnosisService.getAll());
});

export default diagnosisRouter;
