let express = require('express');
let app = express();
let assignmentRoute = require('./routes/asgn_controller');
let path = require('path');
let bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalURL}`);
    next();
});

app.use(assignmentRoute);

app.use(express.static('public'));


app.use((req, res, next) => {
    res.status(404).send(`${req.originalUrl} not found!`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}!`));