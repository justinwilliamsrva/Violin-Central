module.exports = function(sequelize, Datatypes) {
  const actorsmovies = sequelize.define("actorsmovies", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  });
  actorsmovies.associate = function(models) {
    actorsmovies.belongsTo(models.actors);
  };
  actorsmovies.associate = function(models) {
    actorsmovies.belongsTo(models.movies);
  };
  return actorsmovies;
};
