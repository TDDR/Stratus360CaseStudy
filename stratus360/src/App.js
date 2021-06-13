import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ComicStrip from './components/ComicStrip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact strict component={ComicStrip}/>
        <Route path='/:num' exact strict component={ComicStrip}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
