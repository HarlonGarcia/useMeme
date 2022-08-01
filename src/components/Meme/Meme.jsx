import React from 'react';
import { CgLoadbarSound } from 'react-icons/cg';
import './Meme.scss';

const Meme = ({title, audio}) => {
  const handleClick = () => {
    console.log('Esse é o meme');
  }
  
  return (
    <article className='meme'>
        <h2>{title}</h2>
        <button onClick={handleClick}><CgLoadbarSound size={'2em'} color={'#ABFEF6'}/></button>
    </article>
  )
}

export default Meme;