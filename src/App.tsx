import { Suspense } from 'react';
import getData from './api/getData';
import Chart from './components/Chart';
import { Filter } from './components/Filter';
import { suspendable } from './util/suspendable';

function App() {
  const getChartData = suspendable(getData());

  return (
    <div className='App'>
      <Filter />
      <Suspense fallback={<div>Loading...</div>}>
        <Chart getChartData={getChartData} />
      </Suspense>
    </div>
  );
}

export default App;
