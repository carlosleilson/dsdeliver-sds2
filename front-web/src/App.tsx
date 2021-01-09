import { useEffect } from 'react';
import './App.css';
import Routes from './Routes';

function App() {

  useEffect(()=>{
    console.log('Componet iniciou!!');
  },[]);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
