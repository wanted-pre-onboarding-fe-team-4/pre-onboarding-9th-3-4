import { Suspense } from 'react';
import styled from 'styled-components';
import getData from './api/getData';
import Chart from './components/Chart';
import { FilterBox } from './components/FilterBox';
import { suspendable } from './util/suspendable';

const getChartData = suspendable(getData());

function App() {
  return (
    <Wrapper>
      <Title>Flexys Chart</Title>
      <FilterBox />
      <ChartWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Chart getChartData={getChartData} />
        </Suspense>
      </ChartWrapper>
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

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
