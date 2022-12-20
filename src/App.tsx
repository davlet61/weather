import 'tailwindcss/tailwind.css';

import mockData from '@data/weather-data.json';
import { useEffect, useState } from 'react';

import { type WeatherData, getWeatherData } from '@/api';

import LineChart from './components/charts/LineChart';

const App = () => {
  const [data, setData] = useState<WeatherData>(mockData);

  useEffect(() => {
    getWeatherData(import.meta.env.VITE_RAPIDAPI_URL, 'Oslo&dt=2022-12-15').then((res) => {
      setData(res ?? mockData);
    });
  }, []);
  return (
    <div className="flex h-full w-screen items-center justify-center">
      <LineChart weatherData={data} />;
    </div>
  );
};

export default App;
