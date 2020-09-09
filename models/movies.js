module.exports = function(sequelize, Datatypes) {
  const movies = sequelize.define("movies", {
    objective: {
      type: Datatypes.STRING,
      allowNull: false
    },
    lesson_plan: {
      type: Datatypes.TEXT
    }
  });
  movies.associate = function(models) {
    movies.belongsToMany(models.actors, {
      through: "actormovies"
    });
  };
  // movies.associate = function(models) {
  //   movies.hasMany(models.actorsmovies);
  // };
  // movies.associate = function(models) {
  //   movies.belongsTo(models.Teachers, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return movies;
};
