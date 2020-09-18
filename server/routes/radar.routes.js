let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let radar = require('../models/radar-schema');
console.log("radar routes");

router.route('/ff').get((req, res) => {
    console.log('in f')
    radar.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/').get((req, res) => {
    radar.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


module.exports = router;