const bcrypt = require("bcryptjs");
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
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false
    }
  });

  Teachers.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  Teachers.addHook("beforeCreate", teacher => {
    Teachers.password = bcrypt.hashSync(
      teacher.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  // Teachers.associate = function(models) {
  //   Teachers.hasMany(
  //     models.Objectives,
  //     {
  //       onDelete: "cascade"
  //     },
  //     {
  //       constraints: false
  //     }
  //   );
  // };
  return Teachers;
};
