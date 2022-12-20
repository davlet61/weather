import { useEffect, useState } from 'react';

import { getWeatherData } from '@/api';
import { WeatherData } from '@/types';

interface FormProps {
  fetchData: (data: WeatherData) => void;
}

const URL = import.meta.env.VITE_RAPIDAPI_URL;

const Form = ({ fetchData }: FormProps) => {
  const initialParams = { q: '', dt: '' };

  const [recentSearch, setRecentSearch] = useState<Array<string>>([]);
  const [params, setParams] = useState(initialParams);
  const generateRandomKey = () => Math.random().toString(36).slice(2, 7);

  useEffect(() => {
    localStorage.setItem('recent.search', JSON.stringify([...recentSearch]));
  }, [recentSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setParams({ ...params, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (params.q !== '') {
      setRecentSearch((previousState) => {
        const filteredSearch = previousState.filter((el) => el !== params.q);
        return [params.q, ...filteredSearch].slice(0, 5);
      });
    }
    const data = await getWeatherData(URL, params);
    fetchData(data as WeatherData);
    setParams(initialParams);
  };

  return (
    <form className="flex items-stretch justify-center gap-4 p-8" onSubmit={handleSubmit}>
      <div className="flex items-end gap-2">
        <label htmlFor="search">
          <span>Get data for another city:</span>
          <input
            id="search"
            className="ml-2 rounded p-2 placeholder:italic"
            type="text"
            name="q"
            placeholder="Type a city name..."
            list="recent"
            value={params.q}
            onChange={handleChange}
          />
        </label>
        <datalist id="recent" className="form__datalist">
          {recentSearch.map((item) => (
            <option key={generateRandomKey()}>{item}</option>
          ))}
        </datalist>
        <label htmlFor="date">
          Choose a date
          <input
            id="date"
            className="ml-2 rounded p-2 placeholder:italic"
            type="date"
            name="dt"
            placeholder="Type a city name..."
            list="recent"
            value={params.dt}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className="flex w-36 items-center justify-center gap-2  rounded bg-sky-500 p-2">
        <span className="bold text-white">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};
export default Form;
