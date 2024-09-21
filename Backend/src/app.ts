import express from 'express';
import routes from './routes';
import userRoutes from '../routes/userRoutes';

const app = express();

app.use(express.json());

//routes
app.use(routes);
app.use(userRoutes);

//server start
app.listen(3333, () => {
    console.log( `Server started at <http://localhost>:${3333}` );
});