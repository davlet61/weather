import { useEffect, useState } from 'react';

import { getWeatherData } from '@/api';
import { WeatherData } from '@/types';

interface FormProps {
  fetchData: (data: WeatherData) => void;
}

const URL = import.meta.env.VITE_RAPIDAPI_URL;

const Form = ({ fetchData }: FormProps) => {
  const [recentSearch, setRecentSearch] = useState<Array<string>>([]);
  const [keyword, setKeyword] = useState('');
  const generateRandomKey = () => Math.random().toString(36).slice(2, 7);

  useEffect(() => {
    localStorage.setItem('recent.search', JSON.stringify([...recentSearch]));
  }, [recentSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword !== '') {
      setRecentSearch((previousState) => {
        const filteredSearch = previousState.filter((el) => el !== keyword);
        return [keyword, ...filteredSearch].slice(0, 5);
      });
    }
    getWeatherData(URL, keyword);
    setKeyword('');
  };

  return (
    <form className="flex items-stretch justify-center" onSubmit={handleSubmit}>
      <label htmlFor="search">
        Get Data for another city:
        <input
          id="search"
          className="ml-2 rounded rounded-r-none p-2 placeholder:italic"
          type="text"
          name="text"
          placeholder="Type a city name..."
          list="recent"
          value={keyword}
          onChange={handleChange}
        />
      </label>
      <datalist id="recent" className="form__datalist">
        {recentSearch.map((item) => (
          <option key={generateRandomKey()}>{item}</option>
        ))}
      </datalist>
      <button type="submit" className="rounded-l-none bg-sky-500 p-2">
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
