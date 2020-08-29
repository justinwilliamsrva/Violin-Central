module.exports = function(sequlize, Datatypes) {
  const Exercises = sequlize.define("Exercises", {
      exercise: {
          type: Datatypes.DECIMAL(3,1),
          allowNull: false
      },
      book_title: {
          type: Datatypes.STRING,
          allowNull: false
      },
      author: {
          type: Datatypes.STRING,
          allowNull: false
      },
      positions: {
          type: Datatypes.STRING,
          allowNull: false
      },
      bowing: {
        type: Datatypes.STRING,
        allowNull: false
    },
    key: {
        type: Datatypes.STRING,
        allowNull: false
    },
    difficulty: {
        type: Datatypes.STRING,
        allowNull: false
    },
    focus: {
        type: Datatypes.STRING,
        allowNull: false
    },
    type: {
        type: Datatypes.STRING,
        allowNull: false
    },
  });
  return Exercises
};