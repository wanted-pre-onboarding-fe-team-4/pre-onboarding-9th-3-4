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
import { ChartStyleConfig } from '../config/ChartStyleConfig';
import { IChartData } from '../types/dataType';

const Chart = () => {
  const [chartData, setChartData] = useState<IChartData[]>();

  useEffect(() => {
    getData().then((res) => {
      setChartData(res);
    });
  }, []);

  return (
    <ComposedChart
      width={ChartStyleConfig.CHART_WIDTH}
      height={ChartStyleConfig.CHART_HEIGHT}
      data={chartData}
      margin={ChartStyleConfig.CHART_MARGIN}
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
      <Legend align='center' />
      <CartesianGrid stroke='#f5f5f5' />

      <Bar
        dataKey='value_bar'
        yAxisId='bar'
        barSize={20}
        fill={ChartStyleConfig.BAR_FILL_COLOR}
        stroke={ChartStyleConfig.BAR_STROKE_COLOR}
      />
      <Area
        type='monotone'
        yAxisId='area'
        dataKey='value_area'
        fill={ChartStyleConfig.AREA_FILL_COLOR}
        fillOpacity={0.8}
        stroke={ChartStyleConfig.AREA_STROKE_COLOR}
      ></Area>
    </ComposedChart>
  );
};

export default Chart;
