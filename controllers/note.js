//  Controller for our notes

var db = require('../models');

module.exports = {
    // Find one note
    find: function(req, res) {
        db.Note.find({ _headlineId: req.params.id }).then(function(dbNote) {
            res.json(dbNote);
        });
    },
    // Create a new note
    create: function(req, res) {
        db.Note.create(req.body).then(function(dbNote) {
            res.json(dbNote);
        });
    }
};