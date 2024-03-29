import { type ChartData, type ChartOptions, Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import type { WeatherData } from '@/types';

import { afterDatasetsDraw, afterEvent, afterInit, changeTitle, drawTickImage, weatherIconsToImg } from './helpers';

ChartJS.register(...registerables);

interface LineChartProps {
  weatherData: WeatherData;
}

const LineChart = ({ weatherData }: LineChartProps) => {
  const { hour, day } = weatherData.forecast.forecastday[0];

  const images = weatherIconsToImg(hour);

  const ptBgColor = hour.map((h) =>
    h.temp_c === day.maxtemp_c || h.temp_c === day.mintemp_c ? 'rgb(255, 99, 132)' : 'rgba(53, 162, 235, 0.3)',
  );

  const ptBorderColor = hour.map((h) =>
    h.temp_c === day.maxtemp_c || h.temp_c === day.mintemp_c ? 'rgb(255, 99, 132)' : 'rgba(53, 162, 235)',
  );

  const plugins = [
    {
      id: 'draw-image',
      afterDraw: (chart: ChartJS) => drawTickImage(chart, images),
    },
    { id: 'corsair', afterInit, afterEvent, afterDatasetsDraw },
  ];

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 30,
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 5,
      },
    },
    scales: {
      x2: {
        ticks: {
          callback: () => '',
        },
        position: 'top' as const,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (items) => changeTitle(items, day),
        },
      },
    },
  };

  const labels = hour.map((h) => h.time.split(' ').slice(-1).join(' '));

  const data: ChartData = {
    labels,
    datasets: [
      {
        data: hour.map((h) => h.temp_c),
        fill: 'start',
        pointBackgroundColor: ptBgColor,
        pointBorderColor: ptBorderColor,
      },
    ],
  };

  return (
    <div className="h-80 w-full overflow-hidden p-2 md:h-[60vh]">
      <Chart key={crypto.randomUUID()} type="line" options={options} data={data} plugins={plugins} />;
    </div>
  );
};

export default LineChart;
