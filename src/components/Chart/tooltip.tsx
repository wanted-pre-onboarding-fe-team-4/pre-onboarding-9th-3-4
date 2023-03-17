import styled from 'styled-components';

export const CustomTooltip = ({ active, payload }: any) => {
  const valid = active && payload?.length;

  if (!valid) {
    return null;
  }

  const { id, value_area, value_bar, date } = payload[0].payload;

  return (
    <TooltipStyle>
      <p>ID: {id}</p>
      <p>Area: {value_area}</p>
      <p>Bar: {value_bar}</p>
      <p>Date: {date}</p>
    </TooltipStyle>
  );
};

const TooltipStyle = styled.div`
  background-color: white;
  border: 3px solid #8884d8;
  padding: 0 10px;
`;
