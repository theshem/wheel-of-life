import http from 'atomicjs';

let wheelData = null;

/* eslint-disable import/prefer-default-export */
export function fetchWheelData() {
  if (wheelData) {
    return Promise.resolve(wheelData);
  }

  const xhr = http('/data/wheel.json', {
    responseType: 'json',
    contentType: 'application/json',
  });

  const { cancel } = xhr;

  const req = xhr.then(({ data: { wheel: steps = [], scale = {} } = {} }) => {
    wheelData = { steps, scale };
    return wheelData;
  });

  req.cancel = cancel;

  return req;
}
