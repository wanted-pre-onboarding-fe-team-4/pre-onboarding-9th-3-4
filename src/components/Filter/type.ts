import { IChartData } from '../../types/dataType';

export const defaultFilter = (chartItem: IChartData) => !chartItem;

export type ChartFilterFunction = (chartItem: IChartData) => boolean;

export const filterById = (targetId: string): (() => ChartFilterFunction) => {
  return () => (charItem) => {
    if (targetId === '해제') {
      return false;
    }
    return charItem.id === targetId;
  };
};
