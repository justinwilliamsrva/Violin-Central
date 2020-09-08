module.exports = function(sequelize, Datatypes) {
  const lessonPlan = sequelize.define("lessonplans", {
    ExerciseId: {
      type: Datatypes.INTEGER,
      references: {
        model: "Exercises",
        key: "id"
      }
    },
    ObjectiveId: {
      type: Datatypes.INTEGER,
      references: {
        model: "Objectives",
        key: "id"
      }
    }
  });
  return lessonPlan;
};
