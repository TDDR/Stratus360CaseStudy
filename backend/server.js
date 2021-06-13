/**Import statements*/
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');

/**Setup helpers */
const app = express();
app.use(cors());
const corsConfig = {
    origin: "http://localhost:3000"
};

/**GET request for the latest comic*/
app.get('/getComic', cors(corsConfig), async (req, res) => {
    const url = 'https://xkcd.com/info.0.json';
    const fetchConfig = {
        method: 'GET'
    }
    const response = await fetch(url, fetchConfig);
    const comic = await response.json();
    res.json(comic);
});

/**GET request for a comic by number*/
app.get('/getComic/:num', cors(corsConfig), async (req, res) => {
    const url = `https://xkcd.com/${req.params.num}/info.0.json`;
    const fetchConfig = {
        method: 'GET'
    }
    const response = await fetch(url, fetchConfig);
    const comic = await response.json();
    res.json(comic);
});

/**Start listening for connections*/
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});