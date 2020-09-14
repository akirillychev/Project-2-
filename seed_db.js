const db = require('./models');

db.Joke.create({rating: "G", joke: "Time waits for no man. Unless that man is Chuck Norris."});

console.log("seed completed");
