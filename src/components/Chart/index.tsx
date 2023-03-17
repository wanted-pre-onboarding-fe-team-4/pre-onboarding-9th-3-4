import { useEffect, useState } from 'react';
import { Tooltip, Legend, Cell, XAxis, Label, YAxis } from 'recharts';
import getData from '../../api/getData';
import { ChartStyleConfig } from '../../config/ChartStyleConfig';
import { IChartData } from '../../types/dataType';
import { CustomTooltip } from './tooltip';
import {
  BottomLeftLabel,
  LeftLabel,
  StyledChartArea,
  StyledChartBar,
  StyledChartBase,
} from './style';

const { BAR_HIGHRIGHT_COLOR, BAR_FILL_COLOR } = ChartStyleConfig;

const Chart = () => {
  const [chartData, setChartData] = useState<IChartData[]>();
  const [hover, setHover] = useState('');

  useEffect(() => {
    getData().then((res) => {
      setChartData(res);
    });
  }, []);

  const handleHover = (e: any) => {
    const { isTooltipActive, activePayload } = e;
    const dataExist = isTooltipActive && activePayload;

    if (dataExist) {
      const date = activePayload[0].payload.date;
      setHover(date);
    }
  };

  const mapChartData = ({ date }: IChartData) => {
    const cellColor = date === hover ? BAR_HIGHRIGHT_COLOR : BAR_FILL_COLOR;
    return <Cell key={date} fill={cellColor} />;
  };

  const resetHover = () => setHover('');

  if (!chartData) {
    return null;
  }

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
