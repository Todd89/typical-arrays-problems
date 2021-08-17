
exports.min = function min (array) {

  let min = array[0];
  if (typeof array === 'undefined' || array.length === 0 || typeof array === 'string' || array[0] === 0 || array [0] === '0') {
    return 0;
  }
  for (i = 1; i < array.length; ++i) {
   if (typeof array[i] === 'string' || array [i] === '0') {
     return 0;
   }
    if (array[i] < min) min = array[i];
   }

   return min;
}
exports.max = function max (array) {
  let max = array[0];
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  }
  for (i = 1; i < array.length; ++i) {
   
    if (array[i] > max) max = array[i];
   }

   return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  let avg = 0;
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  }
 for (i = 0; i < array.length; ++i) {
	sum += array [i];
  }
  avg = sum / array.length;
  return avg;
}


