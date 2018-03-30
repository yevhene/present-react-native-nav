const glob = require('glob');
const path = require('path');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'layouts/layout'));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => res.render('content', {
  white: 'white' in req.query
}));

app.use(express.static(path.join(__dirname, 'images')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening http://localhost:${port} port`)
});
