import { useState } from 'react';
import { Tooltip, Legend, Cell, XAxis, Label, YAxis } from 'recharts';
import { ChartStyleConfig } from '../../config/ChartStyleConfig';
import { IChartData } from '../../types/dataType';
import { ChartFilterFunction, filterById } from '../Filter/type';
import { CustomTooltip } from './tooltip';
import {
  BottomLeftLabel,
  LeftLabel,
  StyledChartArea,
  StyledChartBar,
  StyledChartBase,
} from './style';

const { BAR_HIGHRIGHT_COLOR, BAR_FILL_COLOR, BAR_HOVER_COLOR } =
  ChartStyleConfig;

interface ChartProps {
  getChartData: () => IChartData[];
  filterFunction: ChartFilterFunction;
  setFilterFunction: (newFunction: () => ChartFilterFunction) => void;
}

const Chart = ({
  getChartData,
  filterFunction,
  setFilterFunction,
}: ChartProps) => {
  const chartData = getChartData();
  const [hover, setHover] = useState('');

  const handleHover = (e: any) => {
    const { isTooltipActive, activePayload } = e;
    const dataExist = isTooltipActive && activePayload;

    if (dataExist) {
      const date = activePayload[0].payload.date;
      setHover(date);
    }
  };

  const mapChartData = (data: IChartData) => {
    const cellColor = filterFunction(data)
      ? BAR_HIGHRIGHT_COLOR
      : data.date === hover
      ? BAR_HOVER_COLOR
      : BAR_FILL_COLOR;

    return (
      <Cell
        key={data.date}
        fill={cellColor}
        onClick={() => setFilterFunction(filterById(data.id))}
      />
    );
  };

  const resetHover = () => setHover('');

  return (
    <StyledChartBase
      data={chartData}
      onMouseMove={handleHover}
      onMouseLeave={resetHover}
    >
      <XAxis dataKey='date' minTickGap={100}>
        <BottomLeftLabel value='2023-02-05일자' />
      </XAxis>
      <YAxis yAxisId='area' dataKey='value_area' domain={[0, 200]}>
        <LeftLabel value='area' />
      </YAxis>
      <YAxis yAxisId='bar' dataKey='value_bar' orientation='right'>
        <Label value='bar' position='right' angle={-90} />
      </YAxis>
      <Tooltip content={<CustomTooltip />} />
      <Legend align='center' />
      <StyledChartBar yAxisId='bar' dataKey='value_bar'>
        {chartData.map(mapChartData)}
      </StyledChartBar>
      <StyledChartArea yAxisId='area' dataKey='value_area' type='monotone' />
    </StyledChartBase>
  );
};

export default Chart;
