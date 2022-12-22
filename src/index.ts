// ESModules = imports and exports
// CommonJs = require -> Deprecated
import express, { Request, Response } from 'express';

import diariesRoutes from './routes/diaries';

const app = express();

// Se utiliza el middleware cuya función es transformar el req.body a json
app.use(express.json());

// Pasar esta variable a una variable de entorno
const PORT = 3000;

app.get('/ping', (_req: Request, res: Response) => {
  console.log('Someone pinged here!!');
  res.send('You are in ping page');
});

// Use routes, reg
app.use('/api/diaries', diariesRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
