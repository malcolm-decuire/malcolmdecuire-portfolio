// 20250701 UPDATE FOR PUBLIC REPO -FUNCTIONAL

'use client';

import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

if (typeof window !== 'undefined') {
  if (typeof (Highcharts as any).each !== 'function') {
    (Highcharts as any).each = function <T>(arr: T[], fn: (item: T, i: number) => void) {
      for (let i = 0; i < arr.length; i++) fn(arr[i], i);
    };
  }

  try {
    const drilldown = require('highcharts/modules/drilldown');
    const patternFill = require('highcharts-pattern-fill');

    if (typeof drilldown === 'function') {
      drilldown(Highcharts);
    } else if (typeof drilldown?.default === 'function') {
      drilldown.default(Highcharts);
    } else {
      console.warn('[Chart.tsx] drilldown module is not a function:', drilldown);
    }

    if (typeof patternFill === 'function') {
      patternFill(Highcharts);
    } else if (typeof patternFill?.default === 'function') {
      patternFill.default(Highcharts);
    } else {
      console.warn('[Chart.tsx] patternFill module is not a function:', patternFill);
    }
  } catch (err) {
    console.error('[Chart.tsx] Failed to load Highcharts modules:', err);
  }
}

const colors = ['#ec6e30', '#37a9d6', '#27505e', '#ecae2e', '#8dc23f'];

const createPatterns = (arr: string[]) =>
  arr.map((stroke, index) => ({
    id: `custom-pattern-${index}`,
    path: {
      d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
      stroke,
      fill: '#fff',
      strokeWidth: 3,
    },
  }));

interface ISeries {
  name: string;
  y: number;
}

const createOptions = (data: ISeries[]) => ({
  colors,
  defs: { patterns: createPatterns(colors) },
  chart: {
    type: 'pie',
    backgroundColor: 'transparent',
  },
  accessibility: {
    point: { valueSuffix: '%' },
  },
  title: { text: '' },
  subtitle: { text: '' },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: { enabled: false },
      showInLegend: true,
      borderWidth: 3,
    },
  },
  legend: {
    labelFormatter(this: ISeries) {
      return `${this.name}: ${(this.y * 100).toFixed(2)}%`;
    },
  },
  series: [
    {
      name: 'Registrations',
      colorByPoint: true,
      innerSize: '50%',
      data: data.map((item, index) => ({
        name: item.name,
        y: item.y,
        color: `url(#custom-pattern-${index})`,
      })),
    },
  ],
  credits: { enabled: false },
});

interface IChartProps {
  data: ISeries[];
}

const Chart = ({ data }: IChartProps) => {
  const options = createOptions(data);
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
