var db = require('../db');

module.exports = {
  getAll: function () {

    db.dbConnection.query('SELECT * FROM users', function (err, result, fields) {
      if (err) {
        throw err;
      }
      console.log(result, 'result', 'fields');
      return result;
    });
  },

  create: function () {
    var sql = `INSERT INTO users (username) VALUES (${'username'})`;
    db.dbConnection.query(sql, function (err, result) {
      if (err) {
        throw err;
      }
      console.log('1 record inserted');
    });
  }
};
