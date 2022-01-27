import './App.css';
import { sports } from './SportsList/Sports'; 
import SportsList from './SportsList/SportsList';
import { taco } from './TacomaList/Tacoma';
import TacomaList from './TacomaList/TacomaList';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <SportsList sports={sports} />

      <TacomaList tacoma={taco} />
    </div>
  );
}

export default App;
