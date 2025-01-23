import express from "express";
import ServiceCentreModel from "../models/serviceCentre.js";

const nearestServiceCentre = async (req, res) => {
    console.log("request");
    const {latitude, longitude} = req.body;
    console.log("request",req.body.latitude, req.body.longitude);
    try{

        const userLocation = {
            type : 'Point',
            coordinates : [longitude, latitude]
        };

        const avail_centres = await ServiceCentreModel.find({
            'address.location' : {
                $nearSphere : {
                    $geometry : userLocation,
                    $maxDistance : 7000
                }
            }
        });

        res.json(avail_centres);
    }

    catch(err){
        console.log(err);

        res.status(400).json("Error loacting nearest Service Centres");
    }
}

export default nearestServiceCentre;