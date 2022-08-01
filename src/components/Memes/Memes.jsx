import React from 'react';
import Meme from '../Meme/Meme';
import './Memes.scss';

const Memes = () => {
  const [memes, setMemes] = React.useState(['A', 'B', 'C', 'D']);

  return (
    <section className="container">
        {memes.map(meme => <Meme key={meme} title={meme}/>)}
    </section>
  )
}

export default Memes;