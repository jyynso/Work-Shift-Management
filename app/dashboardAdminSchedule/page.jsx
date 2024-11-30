'use client'

import {useRouter} from 'next/navigation';

const dashboardAdminSchedule = () => {
  const router = useRouter();

  const handleview = () => {
    router.push('/dashboardAdmin');
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
                }} onClick={handleview}>
            Go back
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
              marginLeft: '155px',
              width:'800px',
              height:'340px'
            }}>
        <h1 className='texth2'
            style={{
                fontWeight:'bold',
                fontSize:'1.2rem',
                color:'#4C4C4C',
                padding:'15px 45px'
            }}>All users</h1>
        </div>

      </section>
    </div>
  );
};

export default dashboardAdminSchedule;
