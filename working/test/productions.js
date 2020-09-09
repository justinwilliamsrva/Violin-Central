module.exports = function(sequelize, Datatypes) {
  const productions = sequelize.define("productions", {
    productionName: Datatypes.STRING
  });
  productions.associate = function(models) {
    productions.hasMany(models.movies, {
      onDelete: "cascade"
    });
  };
  return productions;
};
