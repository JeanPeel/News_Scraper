// Controller for our Headlines
var db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Headline
            .find(req.query)
            .sort({ date: -1 })
            .then(function (dbHeadline) {
                res.json(dbHeadline);
            });
    },
    // Delete the specified headline
    delete: function (req, res) {
        db.Headline.remove({ _id: req.parms.id }).then(function (dbHeadline) {
            res.json(dbHeadline);
        });
    },
    //  Update the specified headline
    update: function (req, res) {
        db.Headline.findOneandUpdate({ _id: req.parms.id }, { $set: req.body },
            { new: ture }).then(function (dbheadline) {
                res.json(dbHeadline);
            });
    }
};