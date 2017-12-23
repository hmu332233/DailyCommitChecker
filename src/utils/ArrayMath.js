
/* 배열 안의 모든 인자에 대해 합을 구한다 */
export function sum(array) {
  const arraySum = array.reduce(function (prevVal, currentVal) {
    return prevVal + currentVal;
  });
  
  return arraySum;
}

/* 배열 안의 모든 인자에 대한 평균을 구한다 */
export function average(array) {
  const arraySum = array.reduce(function (prevVal, currentVal) {
    return prevVal + currentVal;
  });
  
  return arraySum / array.length;
}