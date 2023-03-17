import axios from 'axios';
import { convertData } from '../utils/convertData';

const getData = async () => {
  try {
    const { data } = await axios.get('/mock_data.json');

    return convertData(data.response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getData;
