import styled from 'styled-components';
import { useLocationFilter } from '../contexts/locationFilter';
import { ButtonType } from '../types/ButtonType';

const LOCATIONS = ['해제', '성북구', '강남구', '노원구', '중랑구'];

export const FilterBox = () => {
  const { changeLocation, locationFilter } = useLocationFilter();
  const activated = (loc: string) => {
    const currentLocation = {
      id: loc,
      date: '',
      value_bar: 0,
      value_area: 0,
    };
    return locationFilter(currentLocation);
  };

  const handleToggleFilter = (loc: string) => () => {
    changeLocation(loc);
  };

  return (
    <Wrapper>
      {LOCATIONS.map((loc) => (
        <Button
          key={loc}
          active={activated(loc)}
          onClick={handleToggleFilter(loc)}
        >
          {loc}
        </Button>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button<ButtonType>`
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  font-size: 1rem;
  outline: none;
  font-weight: 700;
  line-height: 1rem;
  transition: 0.4s;
  ${({ active }) =>
    active
      ? `color: #3375ee; border: 0.12rem solid #3375ee;`
      : `color: #90A4AE; border: 0.12rem solid #90A4AE;`}
`;
