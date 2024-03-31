import { useContext } from 'react';
import InfoContext from './InfoContext.js';

// Step 3: Create a Consumer Component
const InnerComponent = () => {
    const { info, setInfo } = useContext(InfoContext);

    return <div>{info}</div>;
}

export default InnerComponent;