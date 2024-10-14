import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../assets/anime.gif'

const SuccessScreen = () => {
  return (
    <div style={{padding:'50px',textAlign:'center'}}>
        <div><img src={Image} alt="" /></div>
        <div style={{ fontSize: "33px",
    fontWeight: "bold"
}}>Thank You!</div>
<div> <Link style={{fontSize:'20px'}} to="https://youtube.com/@maharashtrachyakushit?si=CxmRWdn0ub4Txbpr">
 Stay connected with us using our YouTube Channel</Link>
    </div></div>
   
  )
}

export default SuccessScreen