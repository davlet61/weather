import { useState } from 'react';

const Form = () => {
  const [recentSearch, setRecentSearch] = useState<Array<string>>([]);
  const generateRandomKey = () => Math.random().toString(36).slice(2, 7);

  return (
    <form className="flex items-stretch justify-center">
      <label htmlFor="search">
        Get Data for another city:
        <input
          id="search"
          className="ml-2 rounded rounded-r-none p-2 placeholder:italic"
          type="text"
          name="text"
          placeholder="Type a city name..."
          list="recent"
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
