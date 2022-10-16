const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
    trip_id: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true,
    },
    city_summary: {
        type: String,
        required: true,
    },
    city_image: {
        type: String,
        required: true,
    },
    hotel_name: {
        type: String,
        required: true,
    },
    hotel_address: {
        type: String,
        required: true,
    },
    hotel_image: {
        type: String,
        required: true,
    },
    activities: [{
        activity_name: String,
        activity_address: String,
        activity_image: String
    }],
    restaurants: [{
        restaurant_name: String,
        restaurant_address: String,
        restaurant_image: String
    }],
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;