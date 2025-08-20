import { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Components/Quiz/Quiz';
import { useCountries } from './Context/CountriesApi';


function App() {

  // console.log(countries.data);
  

  return (
    <div>
      <h1>🌍 Country Quiz</h1>
      {/* <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}
          <img src={country.flags.png} alt="" height="20px" width="25px"  />
          </li>
        ))}
      </ul> */}

      <Quiz/>
    </div>
  );
}
export default App
