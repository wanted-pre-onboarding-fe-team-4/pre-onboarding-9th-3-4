import axios from 'axios';
import { IChartObj } from '../types/dataType';

const getData = async () => {
  try {
    const response = await axios.get('/mock_data.json');
    const data: IChartObj = response.data.response;

    return Object.entries(data).map(([key, value]) => ({
      date: key.split(' ')[1],
      ...value,
    }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getData;
