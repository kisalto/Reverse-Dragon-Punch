import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send("batata 2");
})

app.listen(3333);