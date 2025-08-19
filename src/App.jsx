import { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Components/Quiz/Quiz';


function App() {
  const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,languages")
  //     .then((res) => res.json())
  //     .then((data) => setCountries(data) )// only first 10
  //     .catch((err)=> console.log("Error in fetching api ", err)
  //     )

  // }, []);

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital,languages')
  .then(response=> setCountries(response.data.slice(0,10)))
  .catch(error => {
    console.error('Error fetching data:', error); // Handle errors
  });
  })

  // console.log(countries.data);
  

  return (
    <div>
      <h1>🌍 Country Quiz</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}
          <img src={country.flags.png} alt="" height="20px" width="25px"  />
          </li>
        ))}
      </ul>

      <Quiz/>
    </div>
  );
}
export default App
