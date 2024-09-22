import express from 'express';
import routes from './routes';
import userRoutes from '../routes/userRoutes';
import eventRoutes from '../routes/eventRoutes'
import guideRoutes from '../routes/guideRoutes'
import fighterRoutes from '../routes/fighterRoutes'
import gameRoutes from '../routes/gameRoutes'
import cors from 'cors';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.use(express.json());


//routes
app.use(routes);
app.use(userRoutes);
app.use(guideRoutes);
app.use(eventRoutes);
app.use(fighterRoutes);
app.use(gameRoutes);

//server start
app.listen(3333, () => {
    console.log( `Server started at <http://localhost:${3333}>` );
});