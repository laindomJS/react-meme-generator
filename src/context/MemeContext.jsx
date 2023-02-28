import { createContext, useState } from 'react';

export const MemeCtx = createContext();

export const MemeContextProvider = ({ children }) => {
  const [lineOne, setLineOne] = useState('');
	const [lineTwo, setLineTwo] = useState('');
	const [string, setString] = useState('fire');

  const handleLineOne = (evt) => {
    setLineOne(evt.target.value);
  }

  const handleLineTwo = (evt) => {
    setLineTwo(evt.target.value);
  }

  const handleString = (evt) => {
    setString(evt.target.value);
  }

  return (
    <MemeCtx.Provider value={{ lineOne, lineTwo, string, handleLineOne, handleLineTwo, handleString }}>
      {children}
    </MemeCtx.Provider>
  )

}