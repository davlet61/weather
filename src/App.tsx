import mockData from '@data/weather-data.json';
import { useState } from 'react';

import LineChart from '@/components/charts/LineChart';
import Form from '@/components/Form';
import type { WeatherData } from '@/types';

const App = () => {
  const [data, setData] = useState<WeatherData>(mockData);

  const handleWeatherData = (data: WeatherData) => {
    setData(data);
  };

  return (
    <main>
      <Form handleData={handleWeatherData} />
      <LineChart weatherData={data} />;
    </main>
  );
};

export default App;
