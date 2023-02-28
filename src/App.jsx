import { Inputs } from './components/Inputs';
import { Selection } from './components/Selection';
import { Memes } from './components/Memes';
import './assets/css/App.css';

export const App = () => {
	return (
		<div className='App'>
			<h1>Meme Generator</h1>
			<Selection />
			<Inputs />
			<Memes />
		</div>
	)
}
