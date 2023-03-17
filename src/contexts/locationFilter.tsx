import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { IChartData } from '../types/dataType';

const LOCATION_RESET = '해제';

const defaultLocationFilterContext = {
  locationFilter: (data: IChartData) => !!data,
  changeLocation: (loc: string) => {
    void loc;
  },
};

const LocationFilterContext = createContext(defaultLocationFilterContext);

export const useLocationFilter = () => useContext(LocationFilterContext);

export const LocationFilterProvider = (props: PropsWithChildren) => {
  const [filteredLocation, setFilterLocation] = useState(LOCATION_RESET);

  const changeLocation = (curLocation: string) => {
    const prevLocation = filteredLocation;
    const dobuleToggle = curLocation === prevLocation;
    const reset = curLocation === LOCATION_RESET;
    const filterRemoved = dobuleToggle || reset;
    if (filterRemoved) {
      setFilterLocation(LOCATION_RESET);
      return;
    }
    setFilterLocation(curLocation);
  };

  const locationFilter = ({ id }: IChartData) => {
    if (filteredLocation === LOCATION_RESET) {
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
