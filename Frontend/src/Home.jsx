import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Home(){
    return (
        <>
        <div className="bg-[url('background.svg')] bg-center border-2 border-black">
            <Navbar />
            <div className="text-center max-w-full font-Grandstander text-[4vw] mt-[7vh]">Why pay more for your rides ?<br />when &lt; Book-with-Ease /&gt; makes it easier !</div>
            <div className="flex justify-between mt-[7vh]">
                <div className="w-[70vw] bg-[url('Ellipse.svg')] bg-no-repeat bg-contain bg-center text-center flex flex-col items-center justify-center text-white text-[2.2vw] font-Grandstander">
                Find the Best Cab Prices Instantly !<bh />
    With our smart cab tool, easily get fares from multiple providers and get the best deal for your journey
                </div>
                <img src="image2.svg" alt="" className="w-[40vw]"/>
            </div>
            <div className="flex flex-col justify-center items-center mb-[5vh]">
                <Link to='/signin' className="font-Grandstander text-3xl border-2 border-black bg-purple-400 rounded-xl h-[7vh] w-[15vw] flex items-center justify-center">Get Started</Link>
                <div className="font-Grandstander">Already have an Account ? <Link to='/login'>Log In</Link></div>
            </div>
        </div>
        </>
    )
}

export default Home