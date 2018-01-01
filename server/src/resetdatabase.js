var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = 'letsjam';
// Put the initial mock objects here.
var initialData = {

  "users": {
    "1":{
      "_id": new ObjectID("1"),
      "fullName": "SpongeBob",
      "feed" : new ObjectID("1"),
      "picture": new ObjectID("1"),
      "location": "Bikini Bottom",
      "email": "spongeBob@gmail.com",
      "following": [new ObjectID("2")],
      "events":[
       new ObjectID("1"),
       new ObjectID("2")
      ],
      "eventBanner":[
       new ObjectID("1"),
       new ObjectID("")
      ],
      "profilePicture": "img/spongebob_profile.jpg"
    },

    "2":{
      "_id": new ObjectID("2"),
      "fullName": "Patrick",
      "feed": new ObjectID("2"),
      "picture": new ObjectID("2"),
      "location": "Bikini Bottom",
      "email": "patrick@gmail.com",
      "following": [new ObjectID("3")],
      "events":[
        new ObjectID("1"),
        new ObjectID("2"),
        new ObjectID("4")
      ],
      "eventBanner":[
        new ObjectID("1"),
        new ObjectID("2")
      ],
      "profilePicture": "img/patrick_profile.jpg"
    },

    "3":{
      "_id": new ObjectID("3"),
      "fullName": "Sandy Cheeks",
      "feed": new ObjectID("3"),
      "picture": new ObjectID("3"),
      "location": "Bikini Bottom",
      "email": "sandy@gmail.com",
      "following": [
        new ObjectID("2")
      ],
      "events":[
        new ObjectID("1"),
        new ObjectID("3")
      ],
      "eventBanner":[
        new ObjectID("1"),
        new ObjectID("2")
      ],
      "profilePicture": "img/sandy-profile.jpg"
    },

    "4":{
      "_id": new ObjectID("4"),
      "fullName": "Mr. Krabs",
      "feed": new ObjectID("4"),
      "picture": new ObjectID("4"),
      "location": "Bikini Bottom",
      "email": "krabs@gmail.com",
      "following": [
        new ObjectID("1"),
        new ObjectID("3")
      ],
      "events":[
        new ObjectID("2"),
        new ObjectID("4")
      ],
      "eventBanner":[
        new ObjectID("1"),
        new ObjectID("2")
      ],
      "profilePicture": "img/mr_krabs_profile.jpg"
    },

    "5":{
      "_id": new ObjectID("5"),
      "fullName": "Plankton",
      "feed": new ObjectID("5"),
      "picture": new ObjectID("5"),
      "location": "Bikini Bottom",
      "email": "plankton@gmail.com",
      "following": [
        new ObjectID("1")
      ],
      "events":[
        new ObjectID("3")
      ],
      "eventBanner":[
        new ObjectID("1"),
        new ObjectID("2")
      ],
      "profilePicture": "img/plankton_profile.jpg"
    }
  },

  "bands": {
    "1": {
      "_id": new ObjectID("1"),
      "name": "Band1",
      "feed": new ObjectID("6"),
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": new ObjectID("1"),
      "pagePicture": "url(img/genericband.jpg)",
      "members": [
        new ObjectID("1"),
        new ObjectID("2"),
        new ObjectID("3")
      ],
      "location": "Bikini Bottom",
      "wanted": [
        {
          "instrument": "Guitarist",
          "info": "Play me something spicy"
        },
        {
          "instrument": "Saxophone",
          "info": "Minimum 70 years of experience"
        }
      ]
    },

    "2": {
      "_id": new ObjectID("2"),
      "name": "Band2",
      "feed": 7,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": new ObjectID("2"),
      "pagePicture": "url(img/genericband.jpg)",
      "members": [
        new ObjectID("2"),
        new ObjectID("4")
      ],
      "location": "Bikini Bottom",
      "wanted": []
    },

    "3": {
      "_id": new ObjectID("3"),
      "name": "Band3",
      "feed": 8,
      "fans": 420,
      "info": "Music band with instruments",
      "profile picture": new ObjectID("3"),
      "pagePicture": "url(img/genericband.jpg)",
      "members": [
        new ObjectID("1"),
        new ObjectID("3"),
        new ObjectID("5")
      ],
      "location": "Bikini Bottom",
      "wanted": []
    }
  },

  "feedItems": {
    "1": {
      "_id" : new ObjectID("1"),
      "author": new ObjectID("1"),
      "contents": "Practice is canceled",
      "postDate": 1453690800000,
      "band" : new ObjectID("1")
    },
    "2": {
      "_id" : new ObjectID("2"),
      "author": new ObjectID("2"),
      "contents": "more messages",
      "postDate": 1453690800001,
      "band" : new ObjectID("1")
    },
    "3": {
      "_id" : new ObjectID("3"),
      "author": new ObjectID("4"),
      "contents": "more messages",
      "postDate": 1453690800002,
      "band" : new ObjectID("2")
    },
    "4": {
      "_id" : new ObjectID("4"),
      "author": new ObjectID("5"),
      "contents": "more messages",
      "postDate": 1453690800003,
      "band" : new ObjectID("2")
    },
    "5": {
      "_id" : new ObjectID("5"),
      "author": new ObjectID("2"),
      "contents": "more messages",
      "postDate": 1453690800004,
      "band" : new ObjectID("3")
    },
    "6": {
      "_id" : new ObjectID("6"),
      "author": new ObjectID("3"),
      "contents": "more messages",
      "postDate": 1453690800005,
      "band" : new ObjectID("2")
    }
  },

  "feeds": {
    "1": {
      "_id": new ObjectID("1"),
      "contents": [
        new ObjectID("1"),
        new ObjectID("2"),
        new ObjectID("3")
      ]
    },
    "2": {
      "_id": new ObjectID("2"),
      "contents": [
        new ObjectID("3"),
        new ObjectID("4")
      ]
    },
    "3": {
      "_id": new ObjectID("3"),
      "contents": [
        new ObjectID("4"),
        new ObjectID("5")
      ]
    },
    "4": {
      "_id": new ObjectID("4"),
      "contents": [
        new ObjectID("5"),
        new ObjectID("6")
      ]
    },
    "5": {
      "_id": new ObjectID("5"),
      "contents": [
        new ObjectID("2"),
        new ObjectID("4")
      ]
    },
    "6": {
      "_id": new ObjectID("6"),
      "contents": [
        new ObjectID("1"),
        new ObjectID("2")
      ]
    },
    "7": {
      "_id": new ObjectID("7"),
      "contents": [
        new ObjectID("3"),
        new ObjectID("4")
      ]
    },
    "8": {
      "_id": new ObjectID("8"),
      "contents": [
        new ObjectID("5"),
        new ObjectID("6")
      ]
    }
  },

  "instruments": {
    "1": {
      "_id": new ObjectID("1"),
      "instrument": "guitar"
    },
    "2": {
      "_id": new ObjectID("2"),
      "instrument": "percussion"
    },
    "3": {
      "_id": new ObjectID("3"),
      "instrument": "piano"
    },
    "4": {
      "_id": new ObjectID("4"),
      "instrument": "bass guitar"
    },
    "5": {
      "_id": new ObjectID("5"),
      "instrument": "saxaphone"
    },
    "6": {
      "_id": new ObjectID("6"),
      "instrument": "trumpet"
    },
    "7": {
      "_id": new ObjectID("7"),
      "instrument": "violin"
    },
    "8": {
      "_id": new ObjectID("8"),
      "instrument": "flute"
    }
  },

  "genres": {
    "1": {
      "_id": new ObjectID("1"),
      "genre": "blues"
    },
    "2": {
      "_id": new ObjectID("2"),
      "genre": "rock"
    },
    "3": {
      "_id": new ObjectID("3"),
      "genre": "jazz"
    },
    "4": {
      "_id": new ObjectID("4"),
      "genre": "classical"
    },
    "5": {
      "_id": new ObjectID("5"),
      "genre": "country"
    },
    "6": {
      "_id": new ObjectID("6"),
      "genre": "metal"
    },
    "7": {
      "_id": new ObjectID("7"),
      "genre": "punk"
    },
    "8": {
      "_id": new ObjectID("8"),
      "genre": "pop"
    }
  },

  "events":{
    "1":{
      "name": "Event 1",
      "band": new ObjectID("1"),
      "_id": new ObjectID("1"),
      "date": 1453668480000,
      "location": "South College",
      "detail": "It is fun"
    },
    "2":{
      "name": "Event 2",
      "band": new ObjectID("2"),
      "_id": new ObjectID("2"),
      "date": 1453668580000,
      "location": "South College",
      "detail": "It is fun"
    },
    "3":{
      "name": "Event 3",
      "band": new ObjectID("3"),
      "_id": new ObjectID("3"),
      "date": 1453668680000,
      "location": "South College",
      "detail": "It is fun"
    },
    "4":{
      "name": "Event 4",
      "band": new ObjectID("2"),
      "_id": new ObjectID("4"),
      "date": 1453669480000,
      "location": "South College",
      "detail": "It is fun"
    }
  },
  "eventBanner":{
    "1":{
      '_id': new ObjectID("1"),
      'title': 'Event1',
      'start': new Date(2017, 4, 22),
      'end': new Date(2017, 4, 22)
    },
    "2":{
      '_id':new ObjectID("2"),
      'title': 'Event2',
      'start': new Date(2017, 4, 22),
      'end': new Date (2017,4,22)
    }
  }
};

//Resets a collection.
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

function addIndexes(db, cb) {
   db.collection('users').createIndex({ "fullName": "text" }, null, cb);
   db.collection('bands').createIndex({ "name": "text" }, null, cb);
 }

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      addIndexes(db, cb);
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
