import styled from 'styled-components';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <TooltipStyle className='custom-tooltip'>
        <p>{`ID: ${payload[0].payload.id}`}</p>
        <p>{`Area: ${payload[0].payload.value_area}`}</p>
        <p>{`Bar: ${payload[0].payload.value_bar}`}</p>
        <p>{`Date: ${payload[0].payload.date}`}</p>
      </TooltipStyle>
    );
  }
  return null;
};

export default CustomTooltip;

const TooltipStyle = styled.div`
  background-color: white;
  border: 3px solid #8884d8;
  padding: 0 10px;
`;
