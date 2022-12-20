import { WeatherData } from '@/types';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

export const getWeatherData = async (url: string, query: string): Promise<WeatherData | undefined> => {
  try {
    const res = await fetch(`${url}?q=${query}`, options);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};
