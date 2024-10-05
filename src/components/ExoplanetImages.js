import React from 'react'; 
import './App.css';
import Quiz from './components/Quiz';
import exoplanet1 from './assets/hi.jpg'; // Adjust the path based on your structure

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Exoplanet Quiz</h1>
                <Quiz /> {/* Directly use Quiz component without passing questions */}
                
                {/* Display images of exoplanets */}
                <div className="image-container">
                    <img src={exoplanet1} alt="Exoplanet 1" className="exoplanet-image" />
                </div>
            </header>
        </div>
    );
}

export default App;
