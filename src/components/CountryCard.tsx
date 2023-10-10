import React from 'react'
import type { Country } from '../types/types.ts';
import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { APP_STRINGS } from '../strings/strings.ts';
        
        

function CountryCard({country}: {
    country: Country
}) {

  const {name, population, region, capital, flag, maps: {googleMaps}, unMember} = country || {};

  return (
    <div className='card'>
        <Card title={name + ` ` + flag}>
            <div className="country-data-field">
                <span>{APP_STRINGS.CAPITAL} : </span>
                <Chip label={capital?.join(',')} />
            </div>
            <div className="country-data-field">
                <span>{APP_STRINGS.POPULATION} : </span>
                <Chip label={`${population}`} />
            </div>
            <div className="country-data-field">
                <span>{APP_STRINGS.REGION} : </span>
                <Chip label={`${region}`} />
            </div>
            <div className="country-data-field">
                <span>{APP_STRINGS.UN_MEMBER} :</span>
                <Chip label={unMember ? APP_STRINGS.YES : APP_STRINGS.NO} />
            </div>
            <div className="country-data-field">
                <span>{APP_STRINGS.MAPS} : </span>
                <i style={{ cursor: 'pointer', color: 'slateblue' }} onClick={() => window.open(googleMaps)} className="pi pi-arrow-up-right" />
            </div>
        </Card>
    </div>
  )
}

export default React.memo(CountryCard)