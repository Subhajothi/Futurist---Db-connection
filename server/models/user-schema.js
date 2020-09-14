const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    account: {
        type: String
    },
    contactnumber: {
        type: String
    },
    region: {
        type: String
    },
    inquirytype: {
        type: String
    }
}, {
        collection: 'users'
    })

module.exports = mongoose.model('User', userSchema)