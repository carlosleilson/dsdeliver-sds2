import { useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {

  useEffect(()=>{
    console.log('Componet iniciou!!');
  },[]);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
