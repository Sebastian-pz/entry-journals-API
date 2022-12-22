import express from 'express';
import * as diariesServices from '../services/diaries.ts';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log(diariesServices);
  res.send(diariesServices);
});

router.post('/', (_req, res) => {
  res.send('Creating a diary!');
});

export default router;
