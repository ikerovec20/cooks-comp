import express, {Express, Request, Response, Application} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import http from 'http';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
const server = http.createServer(app);
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Welcome!');
});

server.listen(port, () => {
    console.log("Server started listening on port " + port);
});

