import { exportMeme } from './utils/exportMeme';
import { useContext } from 'react';
import { MemeCtx } from './context/MemeContext';
import './assets/css/App.css';

export const App = () => {

	const { string, lineOne, lineTwo, handleLineOne, handleLineTwo, handleString } = useContext(MemeCtx);

	return (
		<div className='App'>

			<h1>Meme Generator</h1>

			<select
        className='selection'
				name='meme'
				id='selectMeme'
				value={string}
				onChange={handleString}>

				<option value='fire'>Fire</option>
				<option value='futurama'>Futurama</option>
				<option value='history'>History</option>
				<option value='matrix'>Matrix</option>
				<option value='philosoraptor'>Pholosoraptor</option>
				<option value='smart'>Smart Guy</option>
			</select>

			<input
				type='text'
				value={lineOne}
				onChange={handleLineOne}
				placeholder='Write first line...'
			/>

			<input
				type='text'
				value={lineTwo}
				onChange={handleLineTwo}
				placeholder='Write second line...'
			/>

			<div className='meme' id='meme'>
				<p className='lineOne'>{lineOne}</p>
				<p className='lineTwo'>{lineTwo}</p>
				<img src={`../public/images/${string}.jpg`} />
			</div>

			<button onClick={exportMeme}>Export</button>

		</div>
	)
}
