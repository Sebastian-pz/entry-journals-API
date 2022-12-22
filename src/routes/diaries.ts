import express from 'express';
import * as diariesServices from '../services/diaries';

const router = express.Router();

router.get('/', (_req, res) => {
  return res.status(200).send(diariesServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const entry = diariesServices.getEntryById(id);
  if (entry) {
    const { comment, ...entryWithoutSensitive } = entry;
    return res.status(200).send(entryWithoutSensitive);
  }
  return res.status(404).send({ response: 'Entry not found' });
});

router.post('/', (req, res) => {
  const { weather, visibility, comment } = req.body;
  const newEntry = {
    date: new Date().toISOString().slice(0, 10),
    weather,
    visibility,
    comment,
  };

  diariesServices.addEntry(newEntry);

  return res.status(201).send({ response: 'Entry was created successful' });
});

export default router;
