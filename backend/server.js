const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
const corsConfig = {
    origin: "http://localhost:3000"
};
const PORT = 8080;

app.get('/getComic', cors(corsConfig), async (req, res) => {
    const url = 'https://xkcd.com/info.0.json';
    const fetchConfig = {
        method: 'GET'
    }
    const response = await fetch(url, fetchConfig);
    const comic = await response.json();
    res.json(comic);
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});