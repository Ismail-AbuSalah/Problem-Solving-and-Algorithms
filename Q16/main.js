console.log("Problem Solving Q:16 ");

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  //  const t =  arr.filter((item,i) => {
  //     return item === arr[i+1] || item === arr[i-1]
  //   })
  // console.log('t :>> ', t);
  // let num = null;
  // let count = 0;
  // arr.forEach((item, i) => {
  //   if (item === arr[i + 1]) {
  //     count++;
  //   }
  // });

  const obj = {};
  arr.forEach((item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });

  console.log('obj :>> ', obj);
}

/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
evenOccurrence([1,9,7,7,3,6,6,8,9,9])
evenOccurrence([1,9,7,7,7,3,6,6,8,9,9])
*/
