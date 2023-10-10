import React from 'react'
import { Dropdown } from 'primereact/dropdown';
import type {FilterProps} from '../types/types.ts'
import {DROPDOWN_OPTIONS} from '../utils/constants.ts'

function Filter({
  value,
  onChange
}: FilterProps) {
  
  return (
    <div className='filter-container'>
      <span>Select Metric: </span>
      <Dropdown onChange={(e) => onChange(e.value)} options={DROPDOWN_OPTIONS} value={value}/>
    </div>
  )
}

export default Filter