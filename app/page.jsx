'use client';

import { useState } from 'react';
import {useRouter} from 'next/navigation';

const DashboardLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const btnclick = () => {
    router.push('/dashboardUser');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className='container'>
      <div className="imageContainer">
        <img src="/calendar2.jpg" className="image" alt="Calendar" />
      </div>

      <div className="formContainer">
      <h1 className="textOnTop" 
      style={{fontSize:'60px', paddingBottom:0}}>Welcome</h1>

        <h1 className="texth1" 
        style={{margin:0, padding:0}}>Login</h1>

        <section style={{paddingBottom: '20px'}}>
        <h1 className="texth2"> Username </h1>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={handleUsernameChange}
          className="inputBox"
        />
        </section>
        <section className='font-Poppins'>
          <h1 className="texth2 font-Poppins"> Password</h1>
          <input
          type="text"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className="inputBox"
          />
        </section>
        <section>
        <button className='black_btn' onClick={btnclick}>
          Login
        </button>
        </section>

        
      </div>
    </div>
  );
};

export default DashboardLogin;

