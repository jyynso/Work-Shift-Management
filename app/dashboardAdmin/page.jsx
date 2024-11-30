'use client'

import {useRouter} from 'next/navigation';

const dashboardAdmin = () => {
  const router = useRouter();

  const handleview = () => {
    router.push('/dashboardAdminSchedule');
  }
  const handlelogut = () => {
    router.push('/');
  }
  return (
    <div className='container'
         style={{
           flexDirection: 'column',
           alignItems: 'flex-start',
           padding: '50px',
           paddingTop:'15px',
           marginTop:'0',
           height:'auto',
           width:'100%'
         }}>
        
      <div className='headerRow'>
        <div>
          <div style={{display:'flex',
               flexDirection:'row',
               marginTop:'0px',
               padding:'0',
               marginBlock:'0',
               gap:'10px'
          }}>
          <h1 className='textOnTop' 
              style={{
                fontSize:'2.5rem',
                color:'black',
                marginLeft:'20px',
                marginTop:'10px',
                marginBottom:'20px'
              }}>Hi, </h1>
          <h1 className='textOnTop'
              style={{
                fontSize:'2.5rem',
                color:'#D9C40B',
                marginTop:'10px',
                marginBottom:'10px',
                padding:'0'
              }}>Admin</h1>
        </div>
          <p className='texth2'
              style={{
                marginLeft: '20px',
                marginTop:'5px',
                paddingBottom:'0'
              }}>Welcome to the admin dashboard</p>
        </div>

        <div style={{padding:0}}>
          <span className='texth2' 
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '90px',
                  top: '30px',
                  fontWeight: 'bold',
                  cursor:'pointer'
                }} onClick={handlelogut}>
            Log Out
          </span>
          <p className='texth2'
              style={{
                position: 'absolute',
                right: '80px',
                top: '60px'
              }}>Date here</p>
          <p className='texth2'
              style={{
                position: 'absolute',
                right: '190px',
                top: '60px'
              }}>Time here</p>
        </div>
      </div>

      <section style={{
        display: 'flex',
        justifyContent: 'flex-start', 
        gap: '20px',
        alignItems:'flex-start'
      }}>

        <div className='box'
            style={{
              marginLeft: '60px',
              width:'600px',
              height:'340px'
            }}>
        <h1 className='texth2'
            style={{
                fontWeight:'bold',
                fontSize:'1.2rem',
                color:'#4C4C4C',
                padding:'15px 45px'
            }}>View all records</h1>
        <div>
        <img src='/calendar-dots.png' alt='calendardots' 
            style={{
                marginLeft:'242px',
                marginTop:'50px',
                cursor:'pointer'
            }} onClick={handleview}/>
        </div>
        <h1 className='texth2'
            style={{
                fontWeight:'bold',
                fontSize:'1.2rem',
                color:'#EC984E', 
                marginLeft:'500px', 
                marginTop:'60px',
                cursor:'pointer'
            }} onClick={handleview}>View</h1>
        </div>

        <div>
        <div className='box'
             style={{
                marginTop:'10px',
                marginLeft:'10px',
                width:'400px',
                height:'150px'
             }}>
        <h1 className='texth2'
             style={{
                fontWeight:'bold',
                color:'#4C4C4C',
                padding:'30px 38px',
                margin:'0'
             }}>Total users</h1>
        </div>
      
        <div className='box'
            style={{
              marginTop:'20px',
              marginLeft: '10px',
              width:'400px',
              height:'150px'
            }}>
        </div>
        </div>

      </section>
    </div>
  );
};

export default dashboardAdmin;
