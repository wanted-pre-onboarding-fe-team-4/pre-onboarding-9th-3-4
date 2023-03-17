import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { IChartData } from '../types/dataType';

const defaultLocationFilterContext = {
  locationFilter: (data: IChartData) => !!data,
  changeLocation: (loc: string) => {
    void loc;
  },
};

const LocationFilterContext = createContext(defaultLocationFilterContext);

export const useLocationFilter = () => useContext(LocationFilterContext);

export const LocationFilterProvider = (props: PropsWithChildren) => {
  const [filteredLocation, setFilterLocation] = useState('해제');

  const changeLocation = (curLocation: string) => {
    const prevLocation = filteredLocation;
    const dobuleToggle = curLocation === prevLocation;
    const reset = curLocation === '해제';
    const filterRemoved = dobuleToggle || reset;
    if (filterRemoved) {
      setFilterLocation('해제');
      return;
    }
    setFilterLocation(curLocation);
  };

  const locationFilter = ({ id }: IChartData) => {
    if (filteredLocation === '해제') {
      return false;
    }
    return filteredLocation === id;
  };

  return (
    <LocationFilterContext.Provider value={{ locationFilter, changeLocation }}>
      {props.children}
    </LocationFilterContext.Provider>
  );
};
