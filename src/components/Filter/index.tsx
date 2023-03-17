import styled from 'styled-components';
import { ButtonType } from '../../types/ButtonType';
import { ChartFilterFunction, filterById } from './type';

const LOCATIONS = ['해제', '성북구', '강남구', '노원구', '중랑구'];

interface FilterProps {
  setFilterFunction: (newFunction: () => ChartFilterFunction) => void;
  filterFunction: ChartFilterFunction;
}

export const Filter = ({ setFilterFunction, filterFunction }: FilterProps) => {
  return (
    <Wrapper>
      {LOCATIONS.map((loc) => (
        <Button
          key={loc}
          active={filterFunction({
            id: loc,
            date: '',
            value_bar: 0,
            value_area: 0,
          })}
          onClick={() => setFilterFunction(filterById(loc))}
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
