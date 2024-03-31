import { useState } from 'react';
import InfoContext from './InfoContext.js';

// Step 2: Create a Provider Component
const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState("some example info");

  return (
    <InfoContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
