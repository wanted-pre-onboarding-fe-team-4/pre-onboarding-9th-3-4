import { IChartData, IChartObj } from '../types/dataType';

export const convertData = (data: IChartObj): IChartData[] => {
  const dataArr = [];

  for (const [key, value] of Object.entries(data)) {
    const date = key.split(' ')[1];
    dataArr.push({ date, ...value });
  }

  return dataArr;
};
