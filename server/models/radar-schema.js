const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let radarSchema = new Schema({
    quadrant: {
        type: Number
    },
    ring: {
        type: Number
    },
    label: {
        type: String
    },
    active: {
        type: Boolean
    },
    link: {
        type: String
    },
    moved: {
        type: Number
    }
}, {
        collection: 'radar'
    })

module.exports = mongoose.model('Radar', radarSchema)