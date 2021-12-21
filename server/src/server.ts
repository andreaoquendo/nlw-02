import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

/* O app vai conseguir "ouvir" requisições HTTP. */
app.listen(3333);