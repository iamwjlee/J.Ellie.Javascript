'use strict';
console.log('Hello');


//declare
const arr1= new Array();
const arr2=[1,2];

// index position
const fruits=['apple','mango','banana'];
console.log(fruits.length);
console.log(fruits[0]);

// looping
for(let i=0;i<fruits.length;i++) {
    console.log(fruits[i]);
}

for(let f of fruits) {
    console.log(f);
}
fruits.forEach( (f,index)=> console.log(f,index));

fruits.push('meon');

fruits.forEach( (f,index)=> console.log(f,index));
console.log(fruits.indexOf('apple'));


////////////////////////

