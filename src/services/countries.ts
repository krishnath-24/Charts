import axios from 'axios';
import { getFormattedDataForChart } from '../utils/helpers.ts';

export const getCountries = async () =>  {
    try {
        const {data} = await axios.get('https://restcountries.com/v3.1/all');
        const formattedData = getFormattedDataForChart(data);
        return formattedData;
    } catch (error) {
        return []
    }
}