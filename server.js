const path = require('path');
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'out')));
app.use("/.well-known", express.static(path.join(__dirname, '.well-known')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'out', '404.html'))
});
app.listen(PORT, HOST, () => console.log(`Server running on port ${PORT}...`));
