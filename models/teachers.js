module.exports = function(sequlize, Datatypes) {
  const Teachers = sequlize.define("Teachers", {
    first_name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    last_name: {
      type: Datatypes.STRING,
      allowNull: false
    },
    city: {
      type: Datatypes.STRING,
      allowNull: false
    },
    state: {
      type: Datatypes.STRING,
      allowNull: false
    },
    email: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });
  Teachers.associate = function(models) {
    Teachers.hasMany(models.Objectives, {
      inDelete: "cascade"
    });
  };
  return Teachers;
};
