export const generateRandomArray = (length, limit, filmsArray) => {
  let array = [];
  const random = Math.floor(Math.random() * (limit + 1));
  const sign = limit / 2 > random ? 1 : -1;
  for (let i = 0; i < length; i++) {
    array.push(filmsArray[random + i * sign]);
  }
  return array;
};
