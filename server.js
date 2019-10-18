const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workouts', {
  useNewUrlParser: true,
});

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
  }),
);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/run', (req, res) => {
  db.Run.find({})
    .then((dbRun) => {
      res.render('run', { runs: dbRun });
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/lift', (req, res) => {
  db.Lift.find({})
    .then((dbLift) => {
      res.render('lift', { lifts: dbLift });
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/api/run', ({ body }, res) => {
  db.Run.create(body)
    .then((dbRun) => {
      res.json(dbRun);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post('/api/lift', ({ body }, res) => {
  db.Lift.create(body)
    .then((dbLift) => {
      res.json(dbLiftt);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});