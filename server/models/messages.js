var db = require('../db');

module.exports = {
  getAll: function (callback) {

    db.query('SELECT * FROM messages', function (err, result, fields) {
      if (err) {
        throw err;
      }
      console.log(result, 'result', 'fields');
      callback(null, result);
    });
  },

  create: function (message, callback) {
    var sql = `INSERT INTO messages (messageBody, userID, roomID) VALUES ('${message.text}', '${message.username}', '${message.roomname}')`;
    db.query(sql, function (err, result) {
      if (err) {
        throw err;
      }
      callback(null, result);
      console.log('1 record inserted');
    });
  }
};

