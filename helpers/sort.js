function quickSort(arr, fn) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const pivot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (fn(arr[i], pivot)) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left, fn).concat(pivot, quickSort(right, fn));
}

module.exports = quickSort;