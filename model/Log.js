module.exports = (sequelize, Sequelize) => {
  const Log = sequelize.define("Log", {
    logid: {
      type: Sequelize.NUMBER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    jobid: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    logdate: {
      type: Sequelize.DATE,
      default: Sequelize.NOW,
    }
  },{
    createdAt: false,
    updatedAt: false
    });
  return Log;
};
