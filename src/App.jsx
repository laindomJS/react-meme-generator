import './App.css';

export const App = () => {
	return (
		<div className='App'>

			<select name='meme' id='selectMeme'>
				<option value='fire'>Fire</option>
				<option value='futurama'>Futurama</option>
				<option value='history'>History</option>
				<option value='matrix'>Matrix</option>
				<option value='philosoraptor'>Pholosoraptor</option>
				<option value='smart'>Smart Guy</option>
			</select>

			<input type='text' placeholder='Write first line...' />
			<input type='text' placeholder='Write second line...' />

      <div>
        <p>First Line</p>
        <p>Second Line</p>
        <img src="" alt="" />
      </div>

      <button>Export</button>

		</div>
	)
}
