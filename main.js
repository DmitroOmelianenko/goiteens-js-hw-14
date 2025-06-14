
const delayedPromise = (value, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
};


const promises = [
  delayedPromise('A', 1000),
  delayedPromise('B', 1500),
  delayedPromise('C', 500),
  delayedPromise('D', 2000),
  delayedPromise('E', 1200),
];

Promise.all(promises)
  .then(results => {
    console.log('Усі проміси виконано:');
    console.log(results); 
  })
  .catch(error => {
    console.error('Помилка:', error);
  });



const randomDelay = value => {
  const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise(resolve => {
    setTimeout(() => resolve(value), delay);
  });
};


const racePromises = [
  randomDelay('First'),
  randomDelay('Second'),
  randomDelay('Third'),
  randomDelay('Fourth'),
  randomDelay('Fifth'),
];


Promise.race(racePromises)
  .then(result => {
    console.log('Найшвидший проміс:', result);
  })
  .catch(error => {
    console.error('Помилка:', error);
  });
