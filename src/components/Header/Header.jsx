import React from 'react'
import './Header.scss'
import MemeLogo from "../../assets/images/meme-logo.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={MemeLogo} alt='Meme logo'/>      
      <h1>useMeme</h1>
    </div>
  )
}

export default Header;