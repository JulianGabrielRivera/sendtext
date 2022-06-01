const express = require('express');

const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

// init Nexmo

const nexmo = new Nexmo(
  {
    apiKey: process.env.apiKey,
    apiSecret: process.env.apiSecret,
  },
  { debug: true }
);
// debug gives us extra info

// Init app

const app = express();

// template engine setup

app.set('view engine', 'html');
// we can use .html as our file extensions for our views
app.engine('html', ejs.renderFile);

// Public folder setup where our client side javascript will, will handle event listeners for the form

app.use(express.static(__dirname + '/public'));

//body parser middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// index route

app.get('/', (req, res) => {
  res.render('index');
});

//catch form submit

app.post('/', (req, res) => {
  // const number = req.body.number;
  // const text = req.body.text;
  const { number, text } = req.body;
  nexmo.message.sendSms(
    '18885213120',
    number,
    text,
    { type: 'unicode' },
    (err, responseData) => {
      if (err) {
        console.log(err);
      } else {
        // lists out everything that gives us back
        console.dir(responseData);
      }
    }
  );
  console.log(req.body);
});
//define port

const port = 3000;

// start server

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);
