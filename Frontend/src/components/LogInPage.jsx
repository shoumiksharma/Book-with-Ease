import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
function LogIn(){
    const navigate = useNavigate();
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`,{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials : 'include',
            body : JSON.stringify({username, password})
        });

        // const data = await response.json();
        // console.log(data);
        
        if(response.ok){// status == 200
            alert("Login Successfull !");
            navigate('/user');
        }
        else{// invalid password or sign in required
            alert("Invalid username or password");
        }

    }

        return (
        <>
        <Navbar />
        <div className="bg-[url('background.svg')] bg-center h-screen w-full border-2 border-black font-Grandstander flex flex-col justify-center items-center">
            <div className="text-[4vw] mb-[5vh]">User Log In</div>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-purple-800 h-[40vh] w-[40vw] backdrop-blur-sm bg-opacity-15 rounded-3xl mb-[2vh]">
                <input type="email" name="" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Email/Username" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                <input type="password" name="" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                <button type='submit' className="bg-purple-400 w-[40%] h-[20%] rounded-3xl text-[3vw]">Log In</button>
            </form>
            <div className="text-[1.5vw]">Do not have an Account ? <Link to='/signin'>Sign Up</Link> instead</div>
        </div>
        </>
    )
}

export default LogIn