module.exports = function(sequelize, Datatypes) {
  const actors = sequelize.define("actors", {
    name: Datatypes.STRING
  });
  actors.associate = function(models) {
    actors.belongsToMany(models.movies, {
      through: "ActorMovies"
    });
  };
  return actors;
};
