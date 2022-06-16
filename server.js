const express = require('express');
const app = express();
const PORT = '4001';

// require('./config/db.connection')

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    let context = {};
    res.render('index.ejs', context)
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));