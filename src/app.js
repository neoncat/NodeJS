const express = require('express');

const app = express();
const router = express.Router();

const rota = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Api",
        version: "0.0.1"
    });
});

app.use('/', rota);

module.exports = app;
/* Essa classe agora poderá ser utiliza usando o require em outros arquivos */