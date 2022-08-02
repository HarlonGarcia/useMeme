import React from 'react';
import { BsSoundwave } from 'react-icons/bs';
import './Meme.scss';

const Meme = ({title, audio}) => {

  const handleAudio = () => {
    audio.currentTime = 0
    audio.play();
  }
  
  return (
    <article className='meme'>
        <h2>{title}</h2>
        <button onClick={handleAudio}><BsSoundwave size={'2em'} color={'#ABFEF6'}/></button>
    </article>
  )
}

export default Meme;