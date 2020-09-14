// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Joke = sequelize.define("Joke", {
    // The email cannot be null, and must be a proper email before creation
    rating: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joke: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  return Joke;
};
