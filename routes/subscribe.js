exports.subscribe = function (req, res) {


  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://127.0.0.1:27017/holdingpage', function (err, db) {
    if (err) throw err;

    var collection = db.collection('subscribers');
    collection.insert({email: req.body.email}, function (err, docs) {
      if (err)
        res.json({error:'Could not save email address to db'},500);
      else {
        res.json({success:'success'},200);
      }
      db.close();
    });
  });
};