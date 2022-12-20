import mockData from '@data/weather-data.json';
import { useEffect, useState } from 'react';

import { getWeatherData } from '@/api';
import LineChart from '@/components/charts/LineChart';
import Form from '@/components/Form';
import type { WeatherData } from '@/types';

const App = () => {
  const [data, setData] = useState<WeatherData>(mockData);

  const fetchWeatherData = (data: WeatherData) => {
    setData(data);
  };

  return (
    <main>
      <Form fetchData={fetchWeatherData} />
      <LineChart weatherData={data} />;
    </main>
  );
};

export default App;
