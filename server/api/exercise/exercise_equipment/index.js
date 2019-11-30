const express = require('express');
const exerciseEquipmentRoute = express.Router();

exerciseEquipmentRoute.route("/")
    .get((req, res) => {
        return req.db.ExerciseEquipment.fetchAll()
        .then(response => {
            return res.json(response);
        })
    })

module.exports = exerciseEquipmentRoute;