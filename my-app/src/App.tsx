import React from 'react';
import './App.css';
import {TopCars} from "./Components/TopCars/TopCars";

function App() {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}

    ]
  return <TopCars topCars={topCars}/>
}

export default App;
