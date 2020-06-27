// Headline Model

// require mongoose
var mongooose = require('mongoose');

// create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// create the headline schema with our schema class
var headlineSchema = new Schema({
    // headline, a string, must be entered
    headline: {
        type: String, 
        require: true,
        unique: { index: { unique: true} }
    },
    // summary, a string, must be entered
    summary: {
        type: String,
        required: true
    },
    //  url, a string, must be entered
    url: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
});

// create the Headline model using the headlineSchema
var Headline = mongoose.model('Headline', headlineSchema);

// Export the headline model
module.exports = {Headline};
