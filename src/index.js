
exports.min = function min (array) {
  
  if (Array.isArray(array) && array.length > 0) {
    
    let min = array[0];
    for (i = 1; i < array.length; ++i) {
    
      if (array[i] < min) min = array[i]; 
    
  }
      return min;
  }
     return 0;
}


exports.max = function max (array) {

  if (Array.isArray(array) && array.length > 0) {
  let max = array[0];
  
  for (i = 1; i < array.length; ++i) {
   
    if (array[i] > max) max = array[i];
   }

   return max;
}
 return 0;
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


