"use strict";
let array1=[ 8,3,4,8,4,8]
function revers_array(arr){
    let arrlength=arr.length;
    let newarray=[];
    for( let i=0; i <= arr.length-1 ; i++){ 
        newarray[i]=arr[arrlength-1];
        arrlength--;
    }
    return newarray;
}
revers_array(array1);