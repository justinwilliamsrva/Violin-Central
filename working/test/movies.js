module.exports = function(sequelize, Datatypes) {
  const movies = sequelize.define("movies", {
    movieName: {
      type: Datatypes.STRING
    }
  });
  movies.associate = function(models) {
    movies.belongsToMany(models.actors, {
      through: "actormovies"
    });
  };
  movies.associate = function(models) {
    movies.belongsTo(models.productions);
  };
  return movies;
};
