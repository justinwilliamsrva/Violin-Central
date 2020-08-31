module.exports = function(sequlize, Datatypes) {
  const Objectives = sequlize.define("Objectives", {
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
      through: "LessonPlan",
      foreignKey: {
        allowNull: false
      },
      as: "exercise"
    });
  };
  Objectives.associate = function(models) {
    Objectives.belongsTo(models.Teachers, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Objectives;
};
