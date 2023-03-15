export interface IChartObj {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

export interface IChartData {
  date: string;
  id: string;
  value_area: number;
  value_bar: number;
}
