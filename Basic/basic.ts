//primitive
let age:number=99;
let userName:string;

//Arrays and object

let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=['apple','banana','cherry'];

//type alias(no need to repeat types again and again)

type Person={name:string,age:number};

// let person:{name:string,age:number};
let person:Person;
person={
    name:"dfghj",
    age:77
}
// let data: {name: string, age: number}[] = [
let data: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];

  //Type inference(automatically)
  let x = 10; // x is a number
  let y = "hello"; // y is a string
  let z = true; // z is a boolean   

  //Union types
  let unionType: string | number = "hello"; // unionType is a string
  unionType = 10; // unionType is now a number

//function & types
function add(a:number,b:number):number | string{
return a + b;
}

function printoutput(value:any){
    console.log(value);
}


//Generics
function insertAtBeginning<T>(array:T[],value:T){
    const newArray=[value,...array]
    return newArray;

}
const demoArray=[1,2,3]
const updatedArray=insertAtBeginning(demoArray,-1)