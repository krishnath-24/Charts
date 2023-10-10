import React, { useCallback, useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, Cell } from 'recharts';
import { getCountries } from '../services/countries.ts';
import { getRandomColor } from '../utils/helpers.ts';
import { ProgressSpinner } from 'primereact/progressspinner';

function Chart({
    option,
    handleCountrySelect
}) {


  const [countries, setCountries] = useState([]);

  const fetchCountriesData = useCallback(async () => {
    const countries = await getCountries();
    setCountries(countries);
  }, [])

  useEffect(() => {
    fetchCountriesData();
  }, [fetchCountriesData])

  return countries?.length ? <ResponsiveContainer width="100%" height={500}>
    <BarChart
      width={500}
      height={300}
      data={countries}
      margin={{
        top: 15,
        right: 30,
        left: 40,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis type='number'/>
      <Tooltip />
      <Brush dataKey='name' height={30} stroke="#8884d8"/>
      <Legend stroke='#8884d6'/>
      <Bar cursor="pointer" onClick={({payload}) => handleCountrySelect(payload)} type="monotone" dataKey={option}>

        {
            countries.map(country => {
                return <Cell key={`cell-${country}`} fill={getRandomColor()} />
            })
        }
      </Bar>
    </BarChart>
    </ResponsiveContainer> : <ProgressSpinner />
    
}

export default React.memo(Chart)