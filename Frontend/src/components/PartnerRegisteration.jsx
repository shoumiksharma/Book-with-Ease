import Navbar from "./Navbar"
import {useForm} from 'react-hook-form'

const PartnerRegistrationPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async (data) => {
        console.log(data);

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/serviceCentreReg`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials: "include",
            body: JSON.stringify(data)
        })

        const res_data = await response.json();
        console.log(res_data);
    }
    
    return(

        <>

        <Navbar />
        <div className="bg-[url('background.svg')] bg-center border-2 border-black font-Grandstander h-auto flex flex-col items-center justify-center">

            <div className="text-[4vw] my-[5vh]">Partner Registeration</div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center bg-purple-800 h-auto pt-[4vh] pb-[4vh] w-[40vw] backdrop-blur-sm bg-opacity-15 rounded-3xl mb-[4vh] border-2 border-black">

                <input {...register('serviceCentreName' , {
                    required: "Name is required"
                })} 
                type="text" placeholder="Service Center Name" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.serviceCentreName && <span>{errors.serviceCentreName.message}</span> }

                <div className="text-left w-[80%] mt-[2vh] text-[2vw]">Address Details :</div>
                
                <input {...register("shopNumber", {
                    required: "This field is required"
                })} type="text" placeholder="H./Flat/Shop No." className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.shopNumber && <span>{errors.shopNumber.message}</span> }

                <input {...register("locality", {
                    required: "Locality is required"
                })} type="text" placeholder="Locality" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.locality && <span>{errors.locality.message}</span> }

                <input {...register("city", {
                    required: "City is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "City name must contain only letters"
                    }
                })} type="text" placeholder="City" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.city && <span>{errors.city.message}</span> }

                <input {...register("state", {
                    required: "State is required",
                    pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "State name must contain only letters"
                    }
                })} type="text" placeholder="State" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.state && <span>{errors.state.message}</span> }

                <input {...register("pinCode", {
                    required: "Pincode is required",
                    pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Pincode contains 6 digits only"
                    }
                })} type="text" pattern="[0-9]{6}" maxLength={6} placeholder="Pincode" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.pinCode && <span>{errors.pinCode.message}</span> }

                <div>fetch location</div>

                {/* <button className="border-none rounded-2xl text-center pl-[1vw] pr-[1vw] bg-purple-400" id="userLocation" onClick={fetchUserLocation} disabled={isDisabled}>{locationStatus}</button> */}

                <div className="text-left w-[80%] mt-[2vh] text-[2vw]">Contact Info. :</div>

                <input {...register("phone", {
                    required: "Mobile Number is required",
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Mobile Number should contain 10 digits"
                    }
                })} type="text" pattern="[0-9]{10}" maxLength={10} placeholder="Mobile No." className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                {errors.phone && <span>{errors.phone.message}</span> }

                <input {...register("email")}type="email" placeholder="Email (optional)" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>

                <button type='submit' className="bg-purple-400 w-[40%] h-[20%] rounded-3xl text-[3vw]">Register</button>
            </form>
        </div>

        </>

    )


}

export default PartnerRegistrationPage