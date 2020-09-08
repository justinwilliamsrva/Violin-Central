module.exports = function(sequelize, Datatypes) {
  const movies = sequelize.define("movies", {
    name: Datatypes.STRING
  });
  movies.associate = function(models) {
    movies.belongsToMany(models.actors, {
      through: "ActorMovies"
    });
  };
  return movies;
};
