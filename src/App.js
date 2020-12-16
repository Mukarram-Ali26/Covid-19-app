
import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart'
import CountryPicker from './components/Countrypicker/CountryPicker'
import { fetchData } from './api/index';
import image from './image.png';


function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState([]);

    useEffect(() => {
       const fetchAPI = async () => {
           setData(await fetchData());
       }
       fetchAPI();
        
    }, [])

    const handleCountry = async (country) => {
      const fetchedData = await fetchData(country);
      setCountry(country)
      setData(fetchedData)
    }

  return (
    <div className={styles.container}>
    <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountry={handleCountry}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
//  yarn add axios react-chartjs-2 chart.js classnames react-countup @material-ui/core



