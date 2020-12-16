import React, { useEffect, useState } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core'
 import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/index';

const CountryPicker = ({handleCountry}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        
        const fetchingCountries = async () => {
            setCountries(await fetchCountries());
        }
        fetchingCountries()
    }, [setCountries]); 
// 
    return (
        <FormControl className={styles.formControl}>
           <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)}>
              <option value=''>Global</option>
              {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;