import { useState } from 'react';
import {
  Tooltip,
  Legend,
  Cell,
  XAxis,
  Label,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import { ChartStyleConfig } from '../../config/ChartStyleConfig';
import { IChartData } from '../../types/dataType';
import { useLocationFilter } from '../../contexts/locationFilter';
import { CustomTooltip } from './tooltip';
import {
  BottomLeftLabel,
  LeftLabel,
  StyledChartArea,
  StyledChartBar,
  StyledChartBase,
} from './style';

const { BAR_HIGHLIGHT_COLOR, BAR_FILL_COLOR, BAR_HOVER_COLOR } =
  ChartStyleConfig;

interface ChartProps {
  getChartData: () => IChartData[];
}

const Chart = ({ getChartData }: ChartProps) => {
  const chartData = getChartData();
  const { changeLocation, locationFilter } = useLocationFilter();
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
    const cellColor = locationFilter(data)
      ? BAR_HIGHLIGHT_COLOR
      : data.date === hover
      ? BAR_HOVER_COLOR
      : BAR_FILL_COLOR;

    const handleCellClick = () => {
      changeLocation(data.id);
    };
    return <Cell key={data.date} fill={cellColor} onClick={handleCellClick} />;
  };

  const resetHover = () => setHover('');

  const areaClick = (e: any) => {
    const location = e.activePayload[0].payload.id;
    changeLocation(location);
  };

  return (
    <Wrapper>
      <ResponsiveContainer>
        <StyledChartBase
          data={chartData}
          onMouseMove={handleHover}
          onMouseLeave={resetHover}
          onClick={(e) => e && areaClick(e)}
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
          <StyledChartArea
            yAxisId='area'
            dataKey='value_area'
            type='monotone'
          />
        </StyledChartBase>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80%;
  width: 100%;
`;

export default Chart;
