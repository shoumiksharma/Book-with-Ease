import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <>
        <div className="sticky top-0 z-20">
            <div className="navbar bg-black h-[15vh] w-[100%] rounded-bl-xl rounded-br-xl">
                <div className="h-full w-full flex justify-between items-center">
                    <div className="logo h-full text-green-400 m-[1vw]">
                        <img src="logo.JPG" alt="" className="h-[100%] w-auto"/>
                    </div>
                    <div className="buttons text-white w-[40%] h-[100%] flex items-center justify-evenly">
                        <Link to='/' className="border-2 border-white rounded-xl w-[20%] h-[40%] font-Grandstander text-[2vw] text-center">Home</Link>
                        {/* <Link to='/about' className="border-2 border-white rounded-xl w-[20%] h-[40%] font-Grandstander text-[2vw] text-center">About</Link> */}
                        <Link to='/login' className=" rounded-xl w-[20%] h-[40%] font-Grandstander text-[2vw] bg-purple-400 text-center">Login</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar