// Binary Search Dummy

//Challenge 3

//Do Another
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let beg3 = 0;

let end3 = arr3[arr3.length - 1];

let mid3 = beg3 + end3 / 2;

function findtarg3(targ3) {
  if (targ3 === mid3) {
    return `Target ${targ3} found in the middle`;
  }
  if (targ3 < mid3) {
    end3 = mid3; //reset the end
    return `Target ${targ3} found less than the middle`;
  }
  if (targ3 > mid3) {
    beg3 = mid3; //reset the beggining
    return `Target ${targ3} found more than tne middle`;
  }
}

console.log(findtarg3(4));

//Copy above with new integers
let numz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let left = 0;

let right = numz[numz.length - 1];

let middle = (left + right) / 2;

function findtarget(target) {
  if (target == middle) {
    return `Target ${target} found in the middle`;
  }
  if (target < middle) {
    middle = right;
    return `Target ${target} found less than the middle`;
  }
  if (target > middle) {
    right = middle;
    return `Target ${target} found more than the middle`;
  }
}

console.log(findtarget(4));
