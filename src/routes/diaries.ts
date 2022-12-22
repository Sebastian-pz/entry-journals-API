import express from 'express';
import * as diariesServices from '../services/diaries';
import toNewDiaryEntry from '../utils';

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
  try {
    const newEntry = toNewDiaryEntry(req.body);

    diariesServices.addEntry(newEntry);

    return res.status(201).send({ response: 'Entry was created successful' });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ response: 'Not success' });
  }
});

export default router;
