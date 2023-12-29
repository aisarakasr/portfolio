import './App.css';

import ButtonAppBar from "../src/components/navbar/Navbar"
import Home from './components/home/Home';
import Store from './components/store/Store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <ButtonAppBar /> */}
       <Home />
       <Store />
      </header>
    </div>
  );
}

export default App;
