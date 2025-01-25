/* eslint-disable no-unused-vars */
import { CContainer } from '@coreui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from './assets/Images/Logonetflix.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignIn = (e) => {
    e.preventDefault();

    // Dummy sign-in logic (replace with your authentication logic)
    if (email === 'test@example.com' && password === 'password') {
      navigate('/home'); // Navigate to dashboard
    } else {
      alert('Invalid credentials');
    }
    setEmail("");
    setPassword("")
  };
  return (
    <section>
        <CContainer>
          <img src={logo} alt="" className='w-[20%] mt-10 shadow-2xl'/>
        <div className='text-center flex flex-col'>
      <form onSubmit={handleSignIn} className='shadow-2xl text-white rounded-[10px] flex flex-col  py-[30px] px-[35px] w-[450px] justify-center align-middle mx-auto' style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
      <h2 className='text-start mt-1 capitalize text-white mb-[35px] block'>Sign In</h2>
        <div className='mb-[20px] mt-[15px] outline-0'> 
          <input
            type="email"
            value={email}
            placeholder='Enter Email or Phone'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            placeholder='Enter Your Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='bg-red-600 text-center inline-block text-white capitalize py-[10px] px-[60px] ' style={{fontSize: "18px",marginTop: "30px",marginBottom: "20px", borderRadius: "5px"}}>Sign In</button>
        <p className='text-[18px]'>
        Don't have an account? <Link to="/sing-up" className='text-white font-bold' style={{textDecoration: "none"}}>Sign Up</Link>
      </p>
      </form>
    </div>
        </CContainer>
    </section>
  );
};

export default SignIn;
