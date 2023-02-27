import { useState } from 'react';
import html2canvas from 'html2canvas';
import './assets/css/App.css';

export const App = () => {
	const [lineOne, setLineOne] = useState('');
	const [lineTwo, setLineTwo] = useState('');
	const [string, setString] = useState('fire');

	const onChangeImage = (evt) => {
		setString(evt.target.value);
	}

	const exportMeme = () => {
		html2canvas(document.querySelector('#meme')).then((canvas) => {
      let img = canvas.toDataURL('image/png');
      let link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    })
	}

	return (
		<div className='App'>

			<h1>Meme Generator</h1>

			<select
        className='selection'
				name='meme'
				id='selectMeme'
				value={string}
				onChange={onChangeImage}>

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

			<div className='meme' id='meme'>
				<p className='lineOne'>{lineOne}</p>
				<p className='lineTwo'>{lineTwo}</p>
				<img src={`/src/assets/images/${string}.jpg`} />
			</div>

			<button onClick={exportMeme}>Export</button>

		</div>
	)
}
