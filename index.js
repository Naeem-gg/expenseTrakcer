const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`<h1>req.body</h1>`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!\nhttp://localhost:3000`));