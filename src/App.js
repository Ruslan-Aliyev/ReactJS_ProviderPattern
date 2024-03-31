import InfoProvider from './InfoProvider.js';
import OuterComponent from './OuterComponent.js';

function App() {
  return (
    <div className="App">
      <InfoProvider>
        <OuterComponent />
      </InfoProvider>
    </div>
  );
}

export default App;
