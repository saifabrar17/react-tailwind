import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-6xl font-bold underline">
        Welcome To My Pricing Club
      </h1>
    </div>
  );
}

export default App;
