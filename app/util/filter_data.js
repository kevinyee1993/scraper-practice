//This file used to filter db results based on what the user enters
//for their survey

//need to define the params that we should take or whatever feel me

var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
let url = 'mongodb://testuser:password@ds161483.mlab.com:61483/flexproject';

MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  // var dbo = db.db("mydb");
  var query = { price: 0 };
  db.collection("Activities").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
