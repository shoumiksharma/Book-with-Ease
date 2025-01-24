import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import cookie from 'js-cookie';
import { useState, useEffect } from 'react';
import Map from './Map.jsx';
function UserHomePage(){

    const navigate = useNavigate();
    const isAuthenticated = !!cookie.get('user_data');
    useEffect( () => {
        if(!isAuthenticated){
            navigate('/login');
        }

        getUsername();
    }, [isAuthenticated]);

    const [username, setUsername] = useState("User");
    async function getUsername(){
        
        try{

            const response = await fetch("http://localhost:8000/fetch" ,{
                method : 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                },
                credentials : 'include'
            });
    
            if(response.ok){
                const data = await response.json();
                setUsername(data.username);
            }
            else{
                console.log("error");
            }
        }

        catch(err){
            console.log(err);
        }

    }

    return (
        <>
        <div className="bg-[url('background.svg')] bg-center border-2 border-black font-Grandstander">
            <Navbar />
            <div className="welcome text-[3vw] mt-[3vh] pl-[3vw]">Welcome {username} ,</div>
            <div className="text-center max-w-full font-Grandstander text-[4vw] mt-[7vh]">Why pay more for your rides ?<br />when &lt; Book-with-Ease /&gt; makes it easier !</div>
            <div className="flex justify-between mt-[7vh]">
                <div className="w-[70vw] bg-[url('Ellipse.svg')] bg-no-repeat bg-contain bg-center text-center flex flex-col items-center justify-center text-white text-[2.2vw] font-Grandstander">
                Find the Best Cab Prices Instantly !<bh />
    With our smart cab tool, easily get fares from multiple providers and get the best deal for your journey
                </div>
                <img src="image2.svg" alt="" className="w-[40vw]"/>
            </div>
            <div className="flex flex-row justify-center items-center gap-[3vw] m-[5vh]">
                <Link to='/fair-estimate' className="font-Grandstander text-[3vw] border-2 border-black bg-purple-400 rounded-xl h-[auto] w-[auto] flex items-center justify-center p-[0.7vw]">Get fair estimates</Link>
                <Link to='/book-ride' className="font-Grandstander text-[3vw] border-2 border-black bg-purple-400 rounded-xl h-[auto] w-[auto] flex items-center justify-center p-[0.7vw]">Book a ride</Link>
                
                
            </div>
        </div>

        </>
    )
}

export default UserHomePage