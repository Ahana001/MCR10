const array = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

function sortFunction(arr) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
    let smallElement = arr[i];

    for (let j = i; j < arr.length; j++) {
      if (smallElement > arr[j]) {
        smallElement = arr[j];
      }
      console.log(`small ${smallElement}`);
      console.log(`interation ${i}`);
      console.log(arr[j]);
    }
    output[i] = smallElement;
  }
  return output;
}
console.log(sortFunction(array));

// Output array =  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
