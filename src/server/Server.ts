import express from 'express'

const server = express();

server.get('/', (req, res) => {
    return res.send(204);
});

export default server;