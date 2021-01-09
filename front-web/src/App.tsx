import { useEffect } from 'react';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  useEffect(()=>{
    console.log('Componet iniciou!!');
  },[]);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
