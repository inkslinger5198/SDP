import React, {useEffect} from 'react';
import './App.css';

const App = () => {
  useEffect(() => {
    // Set the document title for the main page
    document.title = 'Standard Demand Partners';
    
    // Optionally, reset the title when the component unmounts
    return () => {
      document.title = 'Standard Demand Partners';
    };
  }, []);
  
  return (
    <div className="App">
      
    </div>
  )
}

export default App
