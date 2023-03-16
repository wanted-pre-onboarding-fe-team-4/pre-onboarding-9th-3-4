import { useEffect, useState } from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Area,
} from 'recharts';
import getData from '../api/getData';
import { IChartData } from '../types/dataType';

const CHART_WIDTH = 1600;
const CHART_HEIGHT = 800;
const CHART_MARGIN = { top: 20, right: 30, left: 30, bottom: 0 };

const Chart = () => {
  const [chartData, setChartData] = useState<IChartData[]>();

  useEffect(() => {
    getData().then((res) => {
      setChartData(res);
    });
  }, []);

  return (
    <ComposedChart
      width={CHART_WIDTH}
      height={CHART_HEIGHT}
      data={chartData}
      margin={CHART_MARGIN}
    >
      <XAxis
        dataKey='date'
        label={{
          value: '2023-02-05일자',
          position: 'insideBottomLeft',
          offset: -10,
        }}
        minTickGap={100}
      />
      <YAxis
        dataKey='value_area'
        yAxisId='area'
        domain={[0, 200]}
        label={{
          value: 'area',
          angle: -90,
          position: 'insideLeft',
        }}
      />
      <YAxis
        dataKey='value_bar'
        yAxisId='bar'
        orientation='right'
        label={{
          value: 'bar',
          angle: -90,
          offset: -10,
          position: 'insideRight',
        }}
      />

      <Tooltip />
      <Legend
        align='center'
        margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
      />
      <CartesianGrid stroke='#f5f5f5' />

      <Bar
        dataKey='value_bar'
        yAxisId='bar'
        barSize={20}
        fill='#9ea1ff'
        stroke='#9ea1ff'
      />
      <Area
        type='monotone'
        yAxisId='area'
        dataKey='value_area'
        fill='#ff7875'
        fillOpacity={0.8}
        stroke='#ff7875'
      ></Area>
    </ComposedChart>
  );
};

export default Chart;
