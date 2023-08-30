///all about Es6 of javascript
// 1)LET AND CONST


let a=23 //makes a variable

const z=23//make a constant

//let and const have same thing
//1) braces scope hote hai..
//cant access out of braces
{
  let a=2
}
console.log(a)//cant access 

// --------------------------------------------------------

//2. ARROW Function

// three types of function in old js
//a) function statement b)function expression c) anonymous function

// one type:arrow :three varient
//a)basic arrow function b) arrow fnc with one parameter c) arrow function with implict return

// ()=>{
  //fat arrow function
// }
  var ee=()=>{}
a(); //call by this

//fat arrow function one parameter
 var b=(param)=>{} //can remove fat for one  parameter like // 
var b= param=>{}
b(12);

//fat arrrow function with implicit return
// when we dont return
var c=()=>{}  //to var cd=()=>12;

console.log(  cd() );

// ------------------------------------------------------------------------

// template literals
//backtick 
// '' " " &``

console.log(`hey is is ${a} can declare particular values`)
`hey${2+2}`// can calculate and alternavtie is "hey"+2+2


// .....................................................

//3) Default parameters

function abcd (prm=0){ //=0 is default parameter
  console.log(prm)
}
abcd(23)
abcd() //undefined but after prm=0 it takes

//4) SPREAD AND REST

var ac=[1,2,3,4,5]
var b=[1,2,3,4,5] //referencing not copying

// ...   {spread / rest}

var b=[...a]//spread :element k sare values ko us jgh pr bikher dena

//spread is used to copy and spread the values of some other element
//rest: to put remaining values in one variable
function abc(a,b,c){}
abc(1,2,3,4,5,6)//4 5 6 are ignored
// so we can write
function abc(a,b,c,...,d)

// ........................................
// 4) Destucturing

var ab=[1,2,3,4,5,6]
a[0]
a[1]
// 
// it is used so that we shouldnot decrale the values again and again
var[b,c]=ab//decare two variables  b and c from a b=1 c=2
var[b,c,d,e,f,g]=ab// declare 6 variables and this is destructuring
var[b,,c]//b=1 and c=3
var obj={name:"ranum",age:"23 years"}

var{age}=obj;//destrucuring

// ********************************************************************
//5)Promises

// EITHER RESOLVE or REJECT
var ans= new Promise((res,rej)=>{

  if(true){
    return res();
  }
  else{
    return rej()
  }
})

ans
  .then(function(){
   // if resolve then uska code 
  })
.catch(function(){
// if rejected then uska code
})
 //user willl sk for no 0 to 9 if no is below five resolve otherwise reject
 var f =new Promise((res,rej)=>{
  var no= Math.floor(Math.random()*10);
   if(no>5){
     return res();
   }
   else{
     return rej();
   }
 })
f.then(function(){
  console.log("")}
)
.catch(function(){
  console.log("")
})


// ----------------------------------------------------------------------------
// 6) ASYNC AND AWAIT

//USED TO save fron this then kaa chkrrr

async function abcd(){
 await fetch(``) //no then//
  //example
 function sdf({
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
     return raw.json();
    })
    .then (function(data){
      console.log(data)
    })
  })
  
}
sdf();

//can be written as
async function sdg({
  let raw=await fetch(`https://randomuser.me/api/`)
   let ans= await raw.json();
console.log(ans)
})
//async is mainly for third party
-----------------------------------------------------------------
// trycatch

  //to solve error
  // why try catch/
   // javaScript is interpreted language means it works line by line
  
// to run the next code simple if any segment of your code may have errors then try and catch are used so that our code run and dont give a huge problem
