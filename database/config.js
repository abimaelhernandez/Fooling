const mongoose = require('mongoose');

mongoose.Promise = global.Promise
//mongoose.createConnection('mongodb://user:pass@localhost:port/database');
mongoose.connect('mongodb://127.0.0.1:27017/around')

//mongoose.connect(uri);

const db = mongoose.connection

db.once('open', function(){
  console.log('Connected to MongoDB!!!!!!!');
}).on('error', function(error){
  console.log('Connection error:',error);
});

module.exports = db;
