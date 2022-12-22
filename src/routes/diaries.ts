import express from 'express';
import * as diariesServices from '../services/diaries';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).send(diariesServices.getEntries());
  return;
});

router.post('/', (_req, res) => {
  res.send('Creating a diary!');
});

export default router;
