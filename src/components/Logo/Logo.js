import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Eyecon from './eye-con.png';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt 
            className="Tilt br2 shadow-2" 
            options={{ 
                max: 55 
            }} 
            style={{  maxWidth: 300 }} >
                <div className="Tilt-inner pa3 f3 fw5 lh-copy"> Recogn
                <img style={{height:'1.5rem',marginBottom:'-5px'}} src={Eyecon} alt=''></img>
                 y
                 <img style={{height:'1.5rem',marginBottom:'-5px'}}  src={Eyecon} alt=''></img>
                  s</div>
            </Tilt>

        </div>

    )
}

export default Logo;