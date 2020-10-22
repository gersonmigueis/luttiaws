const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Gerson Online'));

app.listen(3000);

