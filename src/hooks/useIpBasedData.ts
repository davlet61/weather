import mockData from '@data/weather-data.json';
import { useEffect, useState } from 'react';

import { getIPLocation, getWeatherData } from '@/api';
import { WeatherData } from '@/types';

export const useIpBasedData = () => {
  const [data, setData] = useState<WeatherData>();
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    getIPLocation()
      .then((res) => res.geo_location.city_name)
      .then((res) => getWeatherData({ q: res, dt: today }))
      .then((res) => {
        setData(res ?? mockData);
        setIsLoading(false);
      })
      .catch(() => setData(mockData));
  }, [today]);

  return { data, setData, isLoading };
};
