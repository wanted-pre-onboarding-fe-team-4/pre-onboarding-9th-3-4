import { Suspense, useState } from 'react';
import styled from 'styled-components';
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
    <Wrapper>
      <Title>Flexys Chart</Title>
      <Filter
        filterFunction={filterFunction}
        setFilterFunction={setFilterFunction}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Chart
          getChartData={getChartData}
          filterFunction={filterFunction}
          setFilterFunction={setFilterFunction}
        />
      </Suspense>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ededf4;
`;

const Title = styled.h1`
  color: #373737;
`;

export default App;
