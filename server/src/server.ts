import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* O app vai conseguir "ouvir" requisições HTTP. */
app.listen(3333);