// Controller of our scraper

var db = require('../models');
var scrape = require('../scriptw/scrape');

module.exports = {
    scrapeHeadlines: function(req, res) {
        // scrape the NYT
        return scrape()
            .then(function (articles) {
                return db.Headline.create(articles);
            })
            .then(function (dbHeadline) {
                if (dbHeadline.length === 0) {
                    res.json({
                        message: 'no new articles today.  Check back tomorrow!'
                    });
                }
                else {
                    // otherwise send back a count of how many articles we have
                    res.json({
                        message: 'Added ' + dbHeadline.length + ' new articles!'
                    });
                }
            })
            .catch(function (err) {
                // this query wont insert articles with duplicate headlines,
                res.json({
                    message: 'Scrape complete!!'
                });
            });
    }
}