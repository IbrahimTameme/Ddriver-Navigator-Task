"use strict";
let name2 ="dua ibrahim alsafasfeh";

function uppercaseX(str){
    let array1 = [];
    let words = str.split(" ");
    let capstring=" ";
    console.log(words);
    for ( let i=0; i< words.length ; i++ ){
        array1.push(words[i].charAt(0).toUpperCase()+ words[i].slice(1));
     capstring+= array1[i];
    }
    return capstring;
}
uppercaseX(name2);
// console.log(uppercaseX(name2));
document.body.innerHTML= uppercaseX(name2);
