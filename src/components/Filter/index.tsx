import { ChartFilterFunction, filterById } from './type';

const LOCATIONS = ['해제', '성북구', '강남구', '노원구', '중랑구'];

interface FilterProps {
  setFilterFunction: (newFunction: () => ChartFilterFunction) => void;
}

export const Filter = ({ setFilterFunction }: FilterProps) => (
  <div>
    {LOCATIONS.map((loc) => (
      <button key={loc} onClick={() => setFilterFunction(filterById(loc))}>
        {loc}
      </button>
    ))}
  </div>
);
