// Завдання 1

const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(arr) {
  return [...new Set(arr)];
}

const arr2 = compact(arr);
console.log(arr2);


// Завдання 2

function createArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

let array = createArray(2, 9);
console.log(array);

// Завдання 3

const arrayNumbers = [];
function createArr(a, b) {
  for (let i = a; i < b; i++) {
    for (let j = 0; j < i - a + 1; j++) {
      arrayNumbers.push(i);
    }
  }
  return arrayNumbers;
}

createArr(1, 7);
console.log(arrayNumbers);


// завдання 4


function randArray(k) {
  const random = [];

  for (let i = 0; i < k; i++) {
    random.push(parseInt(Math.random() * 500));
  } return random;
}
console.log(randArray(5));


// Завдання 5

let  mixedArray = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];
const strArr = [];
const numArr = [];
function sortArray(someArray){
  const unpackingArray = someArray.flat();


  for(let i = 0; i < unpackingArray.length; i++){
    if(typeof unpackingArray[i] === "string"){
      strArr.push(unpackingArray[i]);
    } else {
      numArr.push(unpackingArray[i]);
    }
  }

}
 
sortArray(mixedArray);
console.log(strArr);
console.log(numArr);


