import { useEffect, useState } from 'react';
import getData from '../api/getData';
import { IChartData } from '../types/dataType';

const Chart = () => {
  const [chartData, setChartData] = useState<IChartData[] | undefined>([]);

  useEffect(() => {
    getData().then((res) => {
      setChartData(res);
    });
  }, []);

  console.log(chartData);

  return <></>;
};

export default Chart;
