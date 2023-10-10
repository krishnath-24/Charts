import React, { useCallback } from 'react'
import Filter from '../components/Filter.tsx'
import { DROPDOWN_OPTIONS } from '../utils/constants.ts';
import Chart from '../components/Chart.tsx';
import CountryCards from './CountryCards.tsx';
import type { Country } from '../types/types.ts';
        

function Dashboard() {
  const [selectedOption, setSelectedOption] = React.useState(DROPDOWN_OPTIONS[0]?.value);
  const [selectedCountries, setSelectedCountries] = React.useState<Array<Country>>([]);

  const handleCountrySelect = useCallback((country: Country) => {
    setSelectedCountries(prevCountries => {
        if(prevCountries.some(item => item.name === country.name)) {

            return prevCountries.filter(item => item.name !== country.name)
        } else {
            return [...prevCountries, country]
        }
    })
  }, [])


  return (
    <div className='app-container'>
        <Filter value={selectedOption} onChange={setSelectedOption}/>
        <Chart option={selectedOption} handleCountrySelect={handleCountrySelect}/>
        <CountryCards countries={selectedCountries}/>
    </div>
  )
}

export default Dashboard