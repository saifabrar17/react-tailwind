import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-6xl font-bold underline">
        Welcome To My Pricing Club
      </h1>
      <Pricing></Pricing>
    </div>

  );
}

export default App;
