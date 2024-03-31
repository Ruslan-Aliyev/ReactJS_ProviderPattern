For passing info to deeply nested components

- https://medium.com/@vitorbritto/react-design-patterns-provider-pattern-b273ba665158
- https://dev.to/kurmivivek295/contextprovider-pattern-4m1c
- https://www.w3schools.com/react/react_usecontext.asp




import { createContext } from 'react';
const UserContext = createContext({state: {}, actions: {}});





import { useState } from 'react';

const UserProvider = ({ children }) => {
  const [name, setName] = useState('World');
  const value = {
    state: { name },
    actions: { setName },
  };
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}




import { useContext } from 'react';
import UserContext from './context';

const useUser = () => {
  return useContext(UserContext);
}










// Step 4: Use the Provider to Wrap Components
const App = () => {
 return (
   <ThemeProvider>
     <UserSettings />
     {/* Any other components that need to use context */}
   </ThemeProvider>
 );
}