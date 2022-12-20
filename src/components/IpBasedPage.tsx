import LineChart from '@/components/charts/LineChart';
import Form from '@/components/Form';
import Spinner from '@/components/Spinner';
import { useIpBasedData } from '@/hooks/useIpBasedData';
import type { WeatherData } from '@/types';

const IpBasedPage = () => {
  const { data, isLoading, setData } = useIpBasedData();

  const handleWeatherData = (data: WeatherData) => {
    setData(data);
  };

  return (
    <section className="flex w-screen flex-col items-center justify-center px-4">
      <Form handleData={handleWeatherData} />
      {isLoading && (
        <div className="flex h-80 w-screen items-center justify-center overflow-hidden p-3 md:h-[65vh]">
          <Spinner classNames="w-10 h-10 md:w-20 md:h-20" />
        </div>
      )}
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

export default IpBasedPage;
