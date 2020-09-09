module.exports = function(sequelize, Datatypes) {
  const actors = sequelize.define("actors", {
    actorName: {
      type: Datatypes.STRING
    }
  });
  actors.associate = function(models) {
    actors.belongsToMany(models.movies, {
      through: "actormovies"
    });
  };
  // actors.associate = function(models) {
  //   actors.hasMany(models.actorsmovies);
  // };
  return actors;
};
