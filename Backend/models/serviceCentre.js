import mongoose from "mongoose";

const serviceCentreSchema = new mongoose.Schema({
    serviceCentreName: {type: String, required: true},
    address: {
        shopNumber: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        postalCode: {type: String, required: true},
        // location: {
        //     type: {type: String, default: 'Point'},
        //     coordinates: {type: [Number]}
        // }
    },
    services: {type: [String]},
    contactInfo: {
        phone: {type: Number, required: true},
        email: {type: String}
    }
})
serviceCentreSchema.index({ 'address.location' : '2dsphere' });
const ServiceCentreModel = mongoose.model("ServiceCentre",serviceCentreSchema);
export default ServiceCentreModel;