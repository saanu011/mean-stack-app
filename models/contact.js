const mongoose = require('mongoose');
const ContactSchema = mongoose.Schema({
    first_name:{ type: String, required: true, useNewUrlParser: true},
    last_name:{ type: String, required: true, useNewUrlParser: true},
    email:{ type: String, required: true, useNewUrlParser: true}

});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);