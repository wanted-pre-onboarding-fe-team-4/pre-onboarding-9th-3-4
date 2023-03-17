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
  const [filteredLocation, setFilterLocation] = useState({
    prevLocation: '해제',
    curLocation: '해제',
  });

  const changeLocation = (curLocation: string) => {
    const { curLocation: prevLocation } = filteredLocation;
    const dobuleToggle = curLocation === prevLocation;
    const reset = curLocation === '해제';
    const filterRemoved = dobuleToggle || reset;
    if (filterRemoved) {
      setFilterLocation({ prevLocation, curLocation: '해제' });
      return;
    }
    setFilterLocation({ prevLocation, curLocation });
  };

  const locationFilter = ({ id }: IChartData) => {
    const { curLocation } = filteredLocation;
    if (curLocation === '해제') {
      return false;
    }
    return curLocation === id;
  };

  return (
    <LocationFilterContext.Provider value={{ locationFilter, changeLocation }}>
      {props.children}
    </LocationFilterContext.Provider>
  );
};
