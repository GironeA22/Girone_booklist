import './App.css';
import Book from './Components/Book';
import Bookform from './Components/Bookform';
import {useState} from 'react';

function App() {
  const [card, setCard] = useState({ Title: '', Author: '', Synopsis: '' });
  return (
    <div className="App">
      <header className="App-header">
        <Bookform setCard={setCard} />
      </header>
      <Book card={card}/>
    </div>
  );
}

export default App;