// Good Luck 💪🏾
function secondLargest(arr) {
    // check if the array has at least two elements
    if (arr.length < 2) {
      return null;
    }
    // sort the array in descending order
    arr.sort((a, b) => b - a);
    // return the second element
    return arr[1];
  }
  console.log(secondLargest([23, 66, 50, 12, 6]))
  console.log(secondLargest([65, 34, 100, 22, 85]))
  console.log(secondLargest([67, 22, 19, 12, 80]))
