import { IChartData } from '../types/dataType';

interface FilterProps {
  setFilterFunction: (newFunction: () => ChartFilterFunction) => void;
}

export const defaultFilter = (chartItem: IChartData) => !chartItem;

export type ChartFilterFunction = (chartItem: IChartData) => boolean;

export const createFilterFunction = (
  targetId: string
): (() => ChartFilterFunction) => {
  return () => (charItem) => {
    if (targetId === '해제') {
      return false;
    }
    return charItem.id === targetId;
  };
};

const LOCATIONS = ['해제', '성북구', '강남구', '노원구', '중랑구'];

export const Filter = ({ setFilterFunction }: FilterProps) => (
  <div>
    <h1>Location Filter</h1>
    {LOCATIONS.map((loc) => (
      <button
        key={loc}
        onClick={() => setFilterFunction(createFilterFunction(loc))}
      >
        {loc}
      </button>
    ))}
  </div>
);
