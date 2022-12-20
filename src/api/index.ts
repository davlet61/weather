import { WeatherData } from '@/types';

export const getWeatherData = async (params: { q: string; dt: string }): Promise<WeatherData | undefined> => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST,
      },
    };
    const URL = import.meta.env.VITE_RAPIDAPI_URL;
    const search = new URLSearchParams(params).toString();
    const res = await fetch(`${URL}?${search}`, options);
    return await res.json();
  } catch (err: any) {
    return err;
  }
};

export const getIPLocation = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_GEO_HOST,
      },
    };
    const res = await fetch(import.meta.env.VITE_GEO_URL, options);
    return await res.json();
  } catch (err: any) {
    return err;
  }
};

export const generateRandomKey = () => Math.random().toString(36).slice(2, 7);
