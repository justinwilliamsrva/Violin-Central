module.exports = function(sequlize, Datatypes) {
    const Objectives = sequlize.define("Objectives", {
        objective: {
            type: Datatypes.STRING,
            allowNull: false
        },
        lesson_plan: {
            type: Datatypes.TEXT
        },
        exercise_1: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        exercise_2:  {
            type: Datatypes.INTEGER,
        },
        exercise_3: {
            type: Datatypes.INTEGER,
        },
        exercise_4: {
            type: Datatypes.INTEGER,
        },
        exercise_5: {
            type: Datatypes.INTEGER,
        }
    });
    Objectives.associate = function(models) {
        Objectives.hasMany(models.Exercises, {
            foreignKey: {
                allowNull: false
              },
              as: "exercise"
        });
    };
    return Objectives
};