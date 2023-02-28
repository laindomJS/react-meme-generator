import { useContext } from 'react';
import { MemeCtx } from '../context/MemeContext';
import { exportMeme } from './utils/exportMeme';

export const Memes = () => {
	
  const { lineOne, lineTwo, string } = useContext(MemeCtx);
  
  return (
    <>
		<div className='meme' id='meme'>
			<p className='lineOne'>{lineOne}</p>
			<p className='lineTwo'>{lineTwo}</p>
			<img src={`../public/images/${string}.jpg`} />
		</div>
      <button onClick={exportMeme}>Export</button>
    </>
	)
}
