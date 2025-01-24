import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
function SignUpPage(){
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    async function handleSubmit(e){

        e.preventDefault();
        const response = await fetch("http://localhost:8000/signin" , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({name,username,password}) // key:value name is same
        });

        // const data = await response.json();
        // console.log(data);

        if(response.ok){// user sign in successfull
            alert("Sign in Successfull !");
            navigate('/user');
        }
        else if(response.status == 409){// log in required
            alert("User already exists. Log In instead");
        }
        else{// server error occured
            alert("Sign in again");
        }
        
    }

    return (
        <>
        <Navbar />
        <div className="bg-[url('background.svg')] bg-center h-screen w-full border-2 border-black font-Grandstander flex flex-col justify-center items-center">
            <div className="text-[4vw] mb-[5vh]">User Sign In</div>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-center items-center bg-purple-800 h-auto pt-[4vh] pb-[4vh] w-[40vw] backdrop-blur-sm bg-opacity-15 rounded-3xl mb-[2vh]">
                <input type="text" required placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                <input type="email" required name="" placeholder="Email/Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                <input type="password" required name="" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-[80%] text-[3vw] mb-[2vh] rounded-lg pl-[2%]"/>
                <button type='submit' className="bg-purple-400 w-[40%] h-[20%] rounded-3xl text-[3vw]">Sign In</button>
            </form>
            <div className="text-[1.5vw]">Already have an Account ? <Link to='/login'>Log In</Link> instead</div>
        </div>
        </>
    )
}

export default SignUpPage