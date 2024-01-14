import React, { useRef } from 'react';
import { login } from '../../service/adminService';

const AdminLoginForm = () => {
  // Step 2: Create useRef instances
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;
      console.log(emailValue, passwordValue);
      const res = await login(emailValue, passwordValue);
      console.log(res);
      console.log('Email:', emailValue);
      console.log('Password:', passwordValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
        <form
          className='w-[80dvw] h-[80dvh] border border-gray-100 shadow-lg rounded-lg flex flex-col justify-center items-center p-5'
          onSubmit={handleSubmit}
        >
          <h1 className='m-5 text-orange-500 font-bold'>Admin Information</h1>
          <div className='m-3'>
            <h1>Email:</h1>
            {/* Step 3: Attach ref to the email input field */}
            <input
              type='email'
              className='w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
              ref={emailRef}
            />
          </div>
          <div className='m-3'>
            <h1>Password:</h1>
            {/* Step 3: Attach ref to the password input field */}
            <input
              type='password'
              className='w-[64dvw] h-[5dvh] bg-gray-200 rounded-lg p-2 focus:outline-orange-300'
              ref={passwordRef}
            />
          </div>
          <button
            type='submit'
            className='m-2 bg-orange-500 hover:bg-orange-300 text-white w-[24dvw] rounded-full p-2'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminLoginForm;
