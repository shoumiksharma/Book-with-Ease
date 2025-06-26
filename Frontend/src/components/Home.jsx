import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Home(){
    return (
        <>
        <div className="bg-[url('/background.svg')] bg-center border-2 border-black">
            <Navbar />
            <div className="text-center max-w-full font-Grandstander text-[4vw] mt-[7vh] flex flex-col justify-center items-center">
                <div className='w-[70%]'>
                    Find the nearest mechanics, when you need them most</div>
                </div>
            <div className="flex justify-between mt-[7vh]">
                <div className="w-[70vw] bg-[url('/Ellipse.svg')] bg-no-repeat bg-contain bg-center text-center flex flex-col items-center justify-center text-white text-[2.2vw] font-Grandstander">
                    <div className='w-[70%]'>
                    Whether you're on the road or at home, our app helps you locate the closest mechanic to get your car or bike back in shape—fast and hassle-free !
                    </div>
                </div>
                <img src="image2.svg" alt="" className="w-[40vw]"/>
            </div>
            <div className="flex flex-col justify-center items-center mb-[5vh]">
                <Link to='/signin' className="font-Grandstander text-3xl border-2 border-black bg-purple-400 rounded-xl h-[7vh] w-[15vw] flex items-center justify-center">Get Started</Link>
                <div className="font-Grandstander">Already have an Account ? <Link to='/login' className='text-blue-700'>Log In</Link></div>
            </div>
        </div>
        </>
    )
}

export default Home