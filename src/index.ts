// ESModules = imports and exports
// CommonJs = require -> Deprecated
import express from 'express';
import diariesRoutes from './routes/diaries';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './openapi.json';

const app = express();

// Se utiliza el middleware cuya función es transformar el req.body a json
app.use(express.json());

// Use routes, reg
app.use('/api/diaries', diariesRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Pasar esta variable a una variable de entorno
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🎄`);
});
