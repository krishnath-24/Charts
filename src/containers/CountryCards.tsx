import React from 'react'
import { Country } from '../types/types.ts'
import CountryCard from '../components/CountryCard.tsx'
import { APP_STRINGS } from '../strings/strings.ts'

function CountryCards({
    countries
}: {
    countries: Array<Country>
}) {
  return (
   <>
    {countries?.length ? <h2>{APP_STRINGS.SELECTED_COUNTRIES}</h2> : <h2>{APP_STRINGS.NO_COUNTRIES_SELECTED}</h2>}
     <div className='card-container'>
        {
          countries?.map(country => {
            return <CountryCard country={country} key={country.name} />
          })
        }
    </div>
   </>
  )
}

export default CountryCards