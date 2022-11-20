var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('hello!');
    models.messages.getAll(function(err, data) {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });

  },
  post: function (req, res) {

    models.messages.create(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(201).send('message posted!');
      }
    });
  } // a function which handles posting a message to the database
};


