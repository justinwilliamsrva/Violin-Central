module.exports = function(sequelize, Datatypes) {
  const Objectives = sequelize.define("Objectives", {
    objective: {
      type: Datatypes.STRING,
      allowNull: false
    },
    lesson_plan: {
      type: Datatypes.TEXT
    }
  });
  Objectives.associate = function(models) {
    Objectives.belongsToMany(models.Exercises, {
      through: "lessonplans"
    });
  };
  // Objectives.associate = function(models) {
  //   Objectives.belongsTo(models.Teachers, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Objectives;
};
