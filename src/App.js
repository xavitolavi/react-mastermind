import './App.css';
import GameWrapper from './components/GameWrapper';
import GameProvider from './context/GameProvider';
import Title from './UI/Title';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Title />
        <GameWrapper />
      </div>
    </GameProvider>
  );
}

export default App;
