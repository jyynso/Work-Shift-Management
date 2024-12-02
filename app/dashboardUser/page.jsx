'use client'

import {useRouter} from 'next/navigation';
import {useState} from 'react';
import Modal from '@component/modalreq/Modalrequest';
import { eventNames } from 'process';

const dashboardUser = () => {
  const router = useRouter();
  const [ismodalOpen, setmodalOpen] = useState(false);
  const [date, setday] = useState('');
  const [purpose, setpurpose] = useState('');

  const handleday = (event) => {
    setday(event.target.value);
  }
  const handlepurpose = (event) => {
    setpurpose(event.target.value);
  }
  const handlelogut = () => {
    router.push('/');
  }
  const showmodal = () => {
    setmodalOpen(!ismodalOpen);
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
               gap:'5px'
          }}>
          <h1 className='textOnTop' 
              style={{
                fontSize:'2.5rem',
                color:'black',
                marginLeft:'20px',
                marginTop:'10px',
                marginBottom:'20px'
              }}>Hello there, </h1>
          <h1 className='textOnTop'
              style={{
                fontSize:'2.5rem',
                color:'#3355D9',
                marginTop:'10px',
                marginBottom:'10px',
                padding:'0'
              }}> Pedro Pedro</h1>
        </div>
          <p className='texth2'
              style={{
                marginLeft: '20px',
                marginTop:'5px',
                paddingBottom:'0'
              }}>This is your schedule records so far</p>
        </div>

        <div>
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
        gap: '20px'
      }}>

        <div className='box'
             style={{
              marginLeft: '20px',
              width:'700px',
              height:'340px'
            }}>
        <h1 className='texth2' 
            style={{
              marginLeft:'20px',
              fontWeight:'bold'
        }}>Your Schedule</h1>     
        </div>
        <div>
        <button className='texth2'
              style={{
                padding: '50px 125px',
                marginTop:'10px',
                marginLeft:'10px',
                backgroundColor: '#D72B2B',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight:'bold',
                boxshadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
              }} onClick={showmodal}>
              Request Button
        </button>
        <Modal isOpen={ismodalOpen}
               onClose={showmodal}
               title='Request Leave'>
        <section style={{paddingBottom: '20px'}}>
        <h1 className="texth2" 
            style={{
              paddingTop:'0'
            }}>What day?</h1>
        <input
          type="text"
          placeholder="What day?"
          value={date}
          onChange={handleday}
          className="inputBox"
        />
        </section>

        <section className='font-Poppins'>
          <h1 className="texth2 font-Poppins">What purpose?</h1>
          <input
          type="text"
          placeholder="What purpose?"
          value={purpose}
          onChange={handlepurpose}
          className="inputBox"
          />
        </section>
        </Modal>
      
        <div className='box'
            style={{
              marginTop:'20px',
              marginLeft: '10px',
              width:'400px',
              height:'191px'
            }}>
        <h1 className='texth2' 
            style={{
              padding:'20px',
              fontWeight:'bold'

            }}>Total Absences</h1>
        </div>
        </div>

      </section>
    </div>
  );
};

export default dashboardUser;
