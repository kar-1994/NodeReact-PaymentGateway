const mongoose = require('mongoose');

var uri = 'mongodb://localhost/SampleDB';

var db = mongoose.connection;
mongoose.connect(uri);

db.on('connected',()=>{
    console.log('MongoDB connected');
});

db.on('error',()=>{
    console.log('Error in connectiong mongoDB');
});

module.exports = mongoose;