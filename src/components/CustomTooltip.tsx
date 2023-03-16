import styled from 'styled-components';

const CustomTooltip = ({ active, payload }: any) => {
  const condition = !active || !payload || !payload.length;

  if (condition) {
    return null;
  }

  const payloadData = payload[0].payload;

  return (
    <TooltipStyle>
      <p>{`ID: ${payloadData.id}`}</p>
      <p>{`Area: ${payloadData.value_area}`}</p>
      <p>{`Bar: ${payloadData.value_bar}`}</p>
      <p>{`Date: ${payloadData.date}`}</p>
    </TooltipStyle>
  );
};

export default CustomTooltip;

const TooltipStyle = styled.div`
  background-color: white;
  border: 3px solid #8884d8;
  padding: 0 10px;
`;
