import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';


function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </main>
  );
}

export default App;