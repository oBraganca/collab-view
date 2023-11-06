import React from 'react'
import iconWhite from '../../../assets/images/icon_white.png';
import iconBlack from '../../../assets/images/icon_black.png';
const Logo = (props ) => {
    
    return (
        <>
        {props.color ? (
          <img
          style={{width:"3rem"}}
          src={iconWhite}
          alt=""
          />
        ):(
          <img
          style={{width:"3rem"}}
          src={iconBlack}
          alt=""
          />
        )}
         </>
        )
    }
    
    export default Logo
