const name='elli';
const age=22;
function print_x(name,age) {
    console.log(name);
    console.log(age);
}

function print(person) {
    console.log(person.name);
    console.log(person.age);
}


const obj1={};
const obj2=new Object();

// object = key + value
const elli={name:'elli',age:22};
print(elli);
elli.hasJob=true;
console.log(elli.hasJob);
console.log(elli.name);
console.log(elli['name']);

delete elli.hasJob;

// Propert value shorthand
const person1 = {name:'jinsu001',age:12};
const person2 = {name:'jisu',age:12};
const person3 = {name:'hjlee',age:22};
const person4=makePerson('wj',22);
const person5=new Person('elli',33);
console.log(person4);

function makePerson(name,age) {
    return {
        name, age
    };
}


// templet 
//순수오브젝트만 만드는 함수
//constructor function
function Person(name,age) {
    //this={};
    this.name=name;
    this.age=age;
    //retun this;
}
console.log(person5 );

// in operator: property existence check (key in obj)
console.log('name' in person5);

console.clear()
// for (key in obj)
for(key in person5) {
    console.log(key);
}

// for (value of iterable)
const array=[1,2,3,4,5];
for(value of array) {
    console.log(value);
}

//------------------------ obj->array
const myArray=[];
myArray.push(person1);
myArray.push(person2);
myArray.push(person3);
console.log(myArray[1].name);
console.log(myArray[0]);

for(v of myArray) {
    console.log(v.name);
}

/*
let a=10;
alert(a);
let $aa=10;
alert($aa);
*/
