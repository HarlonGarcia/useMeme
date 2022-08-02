import React from 'react';
import Meme from '../Meme/Meme';
import './Memes.scss';

const Memes = () => {
  const [memes, setMemes] = React.useState([]);

  React.useEffect(() => {
    const fetchMemes = async () => {
      const response = await fetch('src/components/Memes/memes.json');
      const object = await response.json()

      const newObject = object.map(({title, audio}) => {
        return {
          title,
          audio: new Audio(audio)
        }
      });

      setMemes([...memes, ...newObject]);
    }
  
    fetchMemes()
  }, [])

  return (
    <section className="container">
        {memes.map(({title, audio}, index) => <Meme key={index} title={title} audio={audio}/>)}
    </section>
  )
}

export default Memes;