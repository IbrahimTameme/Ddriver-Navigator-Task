'use strict';
let test1 = [1,4,6,2,7,9];
function decending (arr) 
 {
   let newarr = [];
   let max = arr[0];
   let numberofenterys = arr.length;
   for(let i=0 ; i < numberofenterys ; i++)
   {
       let remove = 0;
   for (let i = 0; i < arr.length; i++) {
       if(arr.length == 1)
       {
           max = arr[i]
       }
       else if(arr[i] <= arr[i+1]  )
       {
           max =  arr[i+1];
           remove = i+1;
       }
   }
//    console.log(remove);
//    console.log(arr);
  
  arr.splice(remove,1)

   newarr[i] = max;

}
  console.log(newarr);
   
// return newarr;
   
}
decending(test1);

console.log(decending(test1));
document.getElementById("q").innerHTML = "Q: Write a JavaScript function that return the sort array decending"
document.getElementById("ans").innerHTML = `The sort decending of [1,4,6,2,7,9] ==> ${decending([1,4,6,2,7,9])}.`
