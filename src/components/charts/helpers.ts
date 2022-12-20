import type { Day, Hour } from '@api';
import type { Chart, ChartTypeRegistry, TooltipItem } from 'chart.js';

export interface ChartWithCorsair extends Chart {
  corsair: {
    x: number;
    y: number;
    draw?: boolean;
  };
}

export const changeTitle = (items: TooltipItem<keyof ChartTypeRegistry>[], day: Day) => {
  let label = items[0].label;
  if (items[0].raw === day.mintemp_c) {
    label += ' => Lowest Temperature';
  }
  if (items[0].raw === day.maxtemp_c) {
    label += ' => Highest Temperature';
  }
  return label;
};

export const weatherIconsToImg = (srcs: Array<Hour>) =>
  srcs
    .map((h) => `https:${h.condition.icon}`)
    .map((png) => {
      const image = new Image();
      image.src = png;
      return image;
    });

export const drawTickImage = (chart: Chart, images: Array<HTMLImageElement>) => {
  const ctx = chart.ctx;
  const xAxis = chart.scales.x2;
  const yAxis = chart.scales.y;
  xAxis.ticks.map((_, i) => {
    const x = xAxis.getPixelForTick(i);
    ctx.drawImage(images[i], x - 12, yAxis.top - 35, 40, 40);
  });
  ctx.restore();
};

export const afterInit = (chart: ChartWithCorsair) => {
  chart.corsair = {
    x: 0,
    y: 0,
  };
};

export const afterEvent = (chart: ChartWithCorsair, evt: any) => {
  const {
    chartArea: { top, bottom, left, right },
  } = chart;
  const {
    event: { x, y },
  } = evt;
  if (x < left || x > right || y < top || y > bottom) {
    chart.corsair = {
      x,
      y,
      draw: false,
    };
    chart.draw();
    return;
  }

  chart.corsair = {
    x,
    y,
    draw: true,
  };

  chart.draw();
};

export const afterDatasetsDraw = (
  chart: ChartWithCorsair,
  _: any,
  opts: { width: number; dash: any; color: string },
) => {
  const {
    ctx,
    chartArea: { top, bottom, left, right },
  } = chart;
  const { x, y, draw } = chart.corsair;

  if (!draw) {
    return;
  }

  ctx.lineWidth = opts.width || 0;
  ctx.setLineDash(opts.dash || []);
  ctx.strokeStyle = opts.color || 'red';

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(x, bottom);
  ctx.lineTo(x, top);
  ctx.moveTo(left, y);
  ctx.lineTo(right, y);
  ctx.stroke();
  ctx.restore();
};
