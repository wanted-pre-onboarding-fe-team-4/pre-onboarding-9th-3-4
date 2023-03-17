import { Suspense, useState } from 'react';
import getData from './api/getData';
import Chart from './components/Chart';
import {
  ChartFilterFunction,
  defaultFilter,
  Filter,
} from './components/Filter';
import { suspendable } from './util/suspendable';

function App() {
  const getChartData = suspendable(getData());

  const [filterFunction, setFilterFunction] = useState<ChartFilterFunction>(
    () => defaultFilter
  );

  return (
    <div className='App'>
      <Filter setFilterFunction={setFilterFunction} />
      <Suspense fallback={<div>Loading...</div>}>
        <Chart
          getChartData={getChartData}
          filterFunction={filterFunction}
          setFilterFunction={setFilterFunction}
        />
      </Suspense>
    </div>
  );
}

export default App;
