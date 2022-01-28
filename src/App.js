import './App.css';
import { sports } from './SportsList/Sports'; 
import SportsList from './SportsList/SportsList';
import { taco } from './TacomaList/Tacoma';
import TacomaList from './TacomaList/TacomaList';
import { hero } from './Hero/Hero';
import HeroList from './Hero/HeroList';
import { blog } from './Blog/Blog';
import BlogList from './Blog/BlogList';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <SportsList sports={sports} />

      <TacomaList tacoma={taco} />

      <HeroList hero={hero} />

      <BlogList blog={blog} />
    </div>
  );
}

export default App;
