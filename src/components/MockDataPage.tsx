import mockData from '@data/weather-data.json';
import { useState } from 'react';

import LineChart from '@/components/charts/LineChart';
import Form from '@/components/Form';
import type { WeatherData } from '@/types';

const MockDataPage = () => {
  const [data, setData] = useState<WeatherData>(mockData);

  const handleWeatherData = (data: WeatherData) => {
    setData(data);
  };

  return (
    <section className="flex w-screen flex-col items-center justify-center px-4">
      <Form handleData={handleWeatherData} />
      {data?.forecast ? (
        <>
          <div>
            <p>
              Data for <span className="bold text-sky-600 underline">{data?.location.name}</span> on{' '}
              <span className="bold text-sky-600 underline">{data?.location.localtime.split(' ')[0]}</span>
            </p>
          </div>
          <LineChart weatherData={data} />
        </>
      ) : (
        <h2 className="bold px-16 text-center text-lg">
          No information available! Please check if you have correctly spelled the city name
        </h2>
      )}
    </section>
  );
};

export default MockDataPage;
