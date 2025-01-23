import ServiceCentreModel from "../models/serviceCentre.js";


const regService  = async(req, res) => {

    try{
        console.log("request");
        const newHub = req.body;
        console.log(newHub);
        const newServiceCenter = await ServiceCentreModel.create({
            serviceCentreName: newHub.serviceCentreName,
            address: {
                shopNumber: newHub.shopNumber,
                street: newHub.locality,
                city: newHub.city,
                state: newHub.state,
                postalCode: newHub.pinCode,
            },
            contactInfo: {
                phone: newHub.phone
            }
        })

        res.status(200).json("Service Port Registered Successfully !");
    }

    catch(err){
        console.log("error :",err);
    }
}

export default regService;