import { useState } from 'react';
import './App.css';

export const App = () => {
	const [lineOne, setLineOne] = useState('');
	const [lineTwo, setLineTwo] = useState('');
  const [string, setString] = useState('fire');

  const onChangeImage = (evt) => {
    setString(evt.target.value);
  }

	return (
		<div className='App'>
			
      <select name='meme' id='selectMeme' value={string} onChange={onChangeImage}>
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
				onChange={(evt) => setLineOne(evt.target.value)}
				placeholder='Write first line...'
			/>

			<input
				type='text'
				value={lineTwo}
				onChange={(evt) => setLineTwo(evt.target.value)}
				placeholder='Write second line...'
			/>

			<div>
				<p>{lineOne}</p>
				<p>{lineTwo}</p>
				<img src={`/src/assets/images/${string}.jpg` } />
			</div>

			<button>Export</button>
		</div>
	)
}
