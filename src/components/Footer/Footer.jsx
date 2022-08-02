import React from 'react';
import { FaGithubAlt } from 'react-icons/fa'
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <h3>Developed by <a href='https://github.com/HarlonGarcia'>Harlon</a></h3>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <FaGithubAlt />
    </div>
  )
}

export default Footer;