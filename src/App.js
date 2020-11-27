import { HashRouter, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

// Styles
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        
        <Route exact path="/" component={ Home } />
        <Route path="/About" component={ About } />
        
      </div>
    </HashRouter>
  );
}

export default App;
