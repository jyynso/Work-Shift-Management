'use client';

import { useState } from 'react';
import {useRouter} from 'next/navigation';

const DashboardLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handlesignin = () => {
    router.push('/SignIn'); 
  }
  // conditional statement if user is admin or hindi if yes /dashboardAdmin
  // else routerpush('/dashboardUser')
  const btnloginclick = () => {
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
      style={{fontSize:'60px', 
              paddingBottom:0,
              marginTop:'0'}}>Welcome</h1>
        <div style={{display:'flex',
                     flexDirection:'row',
                     gap:'83px'
        }}>
        <h1 className="texth1" 
        style={{marginTop:'0', 
                padding:0,
                marginBottom:'0'}}>Login</h1>

        <h1 className='texth2'
        style={{marginTop:'12px',
                padding:'0',
                marginBottom:'0',
                fontSize:'1rem',
                color:'#D43434',
                fontWeight:'bold',
                cursor:'pointer'}} onClick={handlesignin}>Sign up</h1>
        </div>

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
        {/* conditional statement dito, if inserted credential is admin or not */}
        {/*for now naka set sya na pupunta sa admin dashboard*/}
        <button className='black_btn' onClick={btnloginclick}>
          Login
        </button>
        </section>
  
        
      </div>
    </div>
  );
};

export default DashboardLogin;

