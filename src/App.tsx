import { useEffect, useState } from 'react';
import getData from './api/getData';
import Chart from './components/Chart';
import { IChartData } from './types/dataType';

function App() {
  const [chartData, setChartData] = useState<IChartData[]>();

  useEffect(() => {
    getData().then((res) => {
      setChartData(res);
    });
  }, []);

  if (!chartData) {
    return null;
  }

  return (
    <div className='App'>
      <Chart chartData={chartData} />
    </div>
  );
}

export default App;
