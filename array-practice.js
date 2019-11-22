/* 
- You are given two arrays and an index. 
- Use the array methods slice and splice to copy each element of the first array into the second array, in order. 
- Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
- Example: sliceAndDice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
*/

function sliceAndDice(arr1, arr2, startIndex){
    let newArray = arr2.slice();
    for (i=0; i < arr1.length; i++){
        newArray.splice(startIndex, 0, arr1[i])
        startIndex++
    }
    console.log(newArray);
    return newArray;

}

sliceAndDice([1, 2, 3], [4, 5], 1);