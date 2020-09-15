// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const Joke = sequelize.define("Joke", {
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
