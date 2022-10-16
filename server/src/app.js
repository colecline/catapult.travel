const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const app = express();
const Trip = require("../src/models/Trip");
require('dotenv').config();

const corsConfing = require("./middlewares/cors");

app.use(express.json());
app.options("*", corsConfing);
app.use(corsConfing);

mongoose.connect("mongodb://localhost:27017/catapult")
    .then(console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

    async function getData() {
        try {
           let res = await axios({
                url: process.env.PYTHON_URL,
                method: 'get',
                timeout: 8000,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if(res.status == 200){
                console.log(res.status)
            }    
            return res.data
        }
        catch (err) {
            console.error(err);
        }
    }


    
app.post("/generate", async (req, res) => {
    let results = await getData();

    const newTrip = new Trip({
        trip_id: 1,
        city_name: results.city_name,
        city_summary: results.city_summary,
        city_image: results.city_image,
        hotel_name: results.hotel_name,
        hotel_address: results.hotel_address,
        hotel_image: results.hotel_img,
        activities: results.activities,
        restaurants: results.restaurants
    });
    newTrip.save();



    return res.status(200).json(results);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`Listening on Port ${PORT}`) });