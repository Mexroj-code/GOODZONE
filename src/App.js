import logo from './logo.svg';
import './App.css';
import TopHeader from './components/TopHeader'
import MiddleHeader from './components/MiddleHeader';
import BottomHeader from './components/BottomHeader';
import Carusel from './components/carusel/Carusel'
import CardCarusel from './components/card/CardCarusel';
import CardCarusel2 from "./components/card/CardCarusel2"
import RightButton from './components/card/RightButton'
function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
      <Carusel/>
       <CardCarusel/>
       <h1>Ommabop mahsulotlar</h1>
       <CardCarusel2/>
       <img src="https://cdn.goodzone.uz/goodzone/838692df-09a0-403c-81b6-e588a76869e1" alt="imgx"/>
       <CardCarusel2/>
       <RightButton/>
    </div>
  );
}

export default App;
