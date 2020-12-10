require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require('cors');
const session      = require('express-session');
const passport     = require('passport');

require('./configs/passport');


mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true,  useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(express.static(path.join(__dirname, 'dist')));

app.use(session({
  secret: 'projectapp',
  //cookie: {expire: 60000},
  rolling: true
}))

app.use(passport.initialize());
app.use(passport.session())

// default value for title local
app.locals.title = 'Project 3 - Back End';

// Allowing the frontend to get resources from the BE. This is essential for allowing FE to access our BE.
// on met donc l'origin de FE le port 3000:
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_HOSTNAME, 'http://localhost:3000']
  })
)


const index = require('./routes/index');
app.use('/', index);

const musicRoutes = require('./routes/music-routes')
app.use('/api', musicRoutes)

const authRoutes = require('./routes/auth-routes')
app.use('/api', authRoutes)

const moodRoutes = require('./routes/mood-routes')
app.use('/api', moodRoutes)

module.exports = app;