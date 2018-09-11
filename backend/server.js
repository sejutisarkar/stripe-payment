const cors = require('cors');
const bodyParser = require('body-parser');

const CORS_WHITELIST = require('./constants/frontend');

// const corsOptions = {
//   origin: (origin, callback) =>
//     (CORS_WHITELIST.indexOf(origin) !== -1)
//       ? callback(null, true)
//       : callback(new Error('Not allowed by CORS'))
// };

const configureServer = app => {
  // app.use(cors(corsOptions));
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.use(bodyParser.json());
};

module.exports = configureServer;
