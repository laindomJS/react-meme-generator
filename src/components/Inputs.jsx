export const Inputs = (setLineOne, setLineTwo, lineOne, lineTwo) => {
	return (
		<>
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
		</>
	)
}
