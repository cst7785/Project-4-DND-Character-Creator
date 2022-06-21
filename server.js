const express = require('express');
const app = express();
const controllers = require('./controllers');
const methodOverride = require('method-override')
const PORT = '4001';

require('./config/db.connection')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use('/', controllers.homepage);
app.use('/manual', controllers.manual);
app.use('/forums', controllers.forums);
app.use('/signin', controllers.signin);

// app.get('/', (req, res) => {
//     let context = {};
//     res.render('index.ejs', context)
// });


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));