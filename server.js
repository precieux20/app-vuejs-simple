const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Notre projet Malo est super, Nous sommes les meilleurs !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
