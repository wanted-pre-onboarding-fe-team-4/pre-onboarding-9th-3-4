import { Suspense, useState } from 'react';
import getData from './api/getData';
import Chart from './components/Chart';
import { Filter } from './components/Filter';
import { ChartFilterFunction, defaultFilter } from './components/Filter/type';
import { suspendable } from './util/suspendable';

const getChartData = suspendable(getData());

function App() {
  const [filterFunction, setFilterFunction] = useState<ChartFilterFunction>(
    () => defaultFilter
  );

  return (
    <div className='App'>
      <h1>Flexys Chart</h1>
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
