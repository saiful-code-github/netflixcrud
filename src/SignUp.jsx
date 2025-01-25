/* eslint-disable no-unused-vars */
import { CContainer } from '@coreui/react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/Images/Logonetflix.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = (e) => {
    e.preventDefault();

    // Dummy sign-up logic (replace with your registration logic)
    if (email && password) {
      alert('Account created successfully!');
      navigate('/sign-in'); // Redirect to sign-in page
    }
  };

  return (
    <section>
       <CContainer>
        <img src={logo} alt="" className='w-[20%] mt-10 shadow-2xl'/>
       <div>
      <form onSubmit={handleSignUp} className='shadow-2xl text-white rounded-[10px] flex flex-col  py-[30px] px-[35px] w-[450px] justify-center align-middle mx-auto' style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
      <h2 className='text-start mt-1 capitalize text-white mb-[35px] block'>Sign Up</h2>
        <div className='mb-[20px] mt-[15px] outline-0'>
          <input
            type="email"
            value={email}
            placeholder='Enter Your Phone'
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
        <button type="submit" className='bg-red-600 text-center inline-block text-white capitalize py-[10px] px-[60px] ' style={{fontSize: "18px",marginTop: "30px",marginBottom: "20px", borderRadius: "5px"}}>Sign Up</button>
        <p className='text-[18px] text-center'>
        Already have an account? <Link to="/" className='text-white font-bold' style={{textDecoration: "none"}}>Sign In</Link>
      </p>
      </form>
    </div>
       </CContainer>
    </section>
  );
};

export default SignUp;
