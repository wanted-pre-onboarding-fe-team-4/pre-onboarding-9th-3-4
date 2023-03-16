import { Key, useEffect, useState } from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
  Area,
  Cell,
} from 'recharts';
import getData from '../api/getData';
import { ChartStyleConfig } from '../config/ChartStyleConfig';
import { IChartData } from '../types/dataType';
import CustomTooltip from './CustomTooltip';

const Chart = () => {
  const [chartData, setChartData] = useState<IChartData[]>();
  const [hover, setHover] = useState('');

  useEffect(() => {
    getData().then((res) => {
      setChartData(res);
    });
  }, []);

  const handleHover = (e: any) => {
    if (e.isTooltipActive && e.activePayload) {
      setHover(e.activePayload[0]?.payload.date);
    }
  };

  return (
    <ComposedChart
      width={ChartStyleConfig.CHART_WIDTH}
      height={ChartStyleConfig.CHART_HEIGHT}
      data={chartData}
      margin={ChartStyleConfig.CHART_MARGIN}
      onMouseMove={(e) => handleHover(e)}
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

      <Tooltip content={<CustomTooltip />} />
      <Legend align='center' />
      <CartesianGrid stroke='#f5f5f5' />

      <Bar
        dataKey='value_bar'
        yAxisId='bar'
        barSize={20}
        stroke={ChartStyleConfig.BAR_STROKE_COLOR}
      >
        {chartData?.map((el: { date: Key | null | undefined }) => (
          <Cell
            key={el.date}
            fill={
              el.date === hover ? '#2F58CD' : ChartStyleConfig.BAR_FILL_COLOR
            }
          />
        ))}
      </Bar>
      <Area
        type='monotone'
        yAxisId='area'
        dataKey='value_area'
        fill={ChartStyleConfig.AREA_FILL_COLOR}
        fillOpacity={0.8}
        stroke={ChartStyleConfig.AREA_STROKE_COLOR}
        activeDot={{ stroke: 'red', strokeWidth: 5, r: 10, fill: 'white' }}
      />
    </ComposedChart>
  );
};

export default Chart;
