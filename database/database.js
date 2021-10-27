const mongoose = require('mongoose');

mongoose.connect( "mongodb://localhost:27017/urlshortner",{ useNewUrlParser: true, useUnifiedTopology: true } );
const mappingSchema = new mongoose.Schema({
  link : { type : String ,  required: [ true , " No link specified...!"  ] } ,
  uniqueId : { type : String ,  required: [ true , " No unique id specified...!"  ] }
});
const mapping = mongoose.model( 'mapping' , mappingSchema );

module.exports = { mapping };