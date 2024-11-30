'use client'

const dashboardUser = () => {
  const handlelogout = () => {}
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
          <span className='texth2' onClick={handlelogout}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '90px',
                  top: '30px',
                  fontWeight: 'bold'
                }}>
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
              }}>
                Request Button
        </button>
      
        <div className='box'
            style={{
              marginTop:'20px',
              marginLeft: '10px',
              width:'400px',
              height:'191px'
            }}>
        </div>
        </div>

      </section>
    </div>
  );
};

export default dashboardUser;
