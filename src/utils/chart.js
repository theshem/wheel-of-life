import { color } from './color';

export function pascalCase(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function getChartData(wheelData = {}, steps = []) {
  if (!Object.keys(wheelData).length) {
    return {};
  }

  const labels = steps.map(step => pascalCase(step));
  const data = steps.map(step => wheelData[step]);

  return {
    datasets: [{
      data,
      backgroundColor: color(steps.length),
    }],
    labels,
  };
}
