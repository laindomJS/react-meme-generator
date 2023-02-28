import { useContext } from 'react';
import { MemeCtx } from '../context/MemeContext';

export const Selection = () => {

  const { string, handleString } = useContext(MemeCtx);

	return (

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
	)
}
