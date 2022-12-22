import express from 'express';
import * as diariesServices from '../services/diaries';

const router = express.Router();

router.get('/', (_req, res) => {
  return res.status(200).send(diariesServices.getEntriesWithoutSensitiveInfo());
});

router.post('/', (_req, res) => {
  res.send('Creating a diary!');
});

export default router;
