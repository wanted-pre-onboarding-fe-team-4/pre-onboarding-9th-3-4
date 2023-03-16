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
import { activedot, ChartStyleConfig } from '../config/ChartStyleConfig';
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
    const isTooltipActive = e.isTooltipActive;
    const activePayload = e.activePayload;

    if (isTooltipActive && activePayload) {
      const date = activePayload[0].payload.date;
      setHover(date);
    }
  };

  return (
    <ComposedChart
      width={ChartStyleConfig.CHART_WIDTH}
      height={ChartStyleConfig.CHART_HEIGHT}
      data={chartData}
      margin={ChartStyleConfig.CHART_MARGIN}
      onMouseMove={handleHover}
      onMouseLeave={() => setHover('')}
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
        {chartData &&
          chartData.map((el: { date: Key | null | undefined }) => (
            <Cell
              key={el.date}
              fill={
                el.date === hover
                  ? ChartStyleConfig.BAR_HIGHRIGHT_COLOR
                  : ChartStyleConfig.BAR_FILL_COLOR
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
        activeDot={activedot}
      />
    </ComposedChart>
  );
};

export default Chart;
