/* eslint-disable import/prefer-default-export */
export function color(count) {
  const colors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
  ];

  const total = colors.length;

  if (count >= total) {
    return [...colors];
  }

  const list = [];

  for (let i = 0; i < count; i += 1) {
    const idx = ((i * Math.floor(total / count)) + Math.floor(total / (2 * count)));
    list.push(colors[idx]);
  }

  return list;
}
