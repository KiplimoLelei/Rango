  // This is my first javascript code!
  console.log('Hello World');
  let name ='Lelei';
  console.log(name)
  //Rules for declaring Variables.
  //Variables cannot be a reserved word.
  //Should be meaningful.
  //cannot start with a number.
  //cannot contain space or hyphen
  //Variable Names are case sensitive
  //Const used to assign constant variable 
  const interestRate = 0.3;
  let firstName = 'lelei';//String Literal
  let lastName = 'kiplimo';
console.log(firstName);
console.log(lastName);
console.log(interestRate);
let isApproved = true;// Boolean Literal
let age=30;//Number Literal
let selectedColor = null;
let middleName = undefined;
let person = {
  name: 'Mosh',
  age: 30
};
//Dot Notation

person.name = 'John';
//Bracket Notation
person ['name'] = 'Mary '
console.log(person.name);
// Arrays
let selectColors = [ 'red ', 'blue'];
console.log(selectColors[0]);
// Fuction Declaration
function greet(name) {
  console.log('Hello '+ name)
}
greet('John');
greet('Mary');
function square (number)  {
return number * number;
}
console.log(square(67));
console.error('This is an error')
console.warn("this is a warning")
//Concatenation
console.log('My name is ' + name + 'i am ' + age); 
const s = 'Technology, computers, Code';
console.log(s.split(', '));
/* Multi
line coments
*/
const fruits = ['Apples', 'oranges', 'pears'];
fruits[3];
 console.log(fruits);
 //Arrays 
 const todos = [
 {
   id: 1,
text: 'take out trash',
isCompleted: true
},
{
  id: 1,
text: 'Meeting With Boss',
isCompleted: true
},
{
  id: 1,
text: 'Dentist App',
isCompleted: true
},
]
 const [{ text }] = todos
console.log({text});
