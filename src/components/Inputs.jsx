import { useContext } from "react"
import { MemeCtx } from "../context/MemeContext"

export const Inputs = () => {
	
  const { lineOne, lineTwo, handleLineOne, handleLineTwo } = useContext(MemeCtx);
  
  return (
		<>
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
		</>
	)
}
