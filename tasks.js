/*1. to check the greatest of three numbers
a=10
b=20
c=30

using conditional statements , print which is the greatest no of three.*/

let a=100
let b=200
let c=300
if((a>b)&&(a>c))
 {
    console.log('A is greater than B and C')
    
}

else if((b>a)&&(b>c))
{
    console.log('B is greater A and C')
   
}

else
console.log("C is greater than A and B")

/*2.
Declare two variables: admin and name.
Assign the value "John" to fname.
Copy the value from fname to admin.
Show the value of admin using console.log*/

let admin
let Name
let fname='john'
admin=fname
console.log(admin)

/*3. Write a program, using the variable declarations above, that displays the data type for each variable.*/

console.log(typeof admin)
console.log(typeof Name)
console.log(typeof fname)

/*4. What will be the result for these expressions?
 5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null*/

console.log(5>4)
console.log("apple">"pineaple")
console.log("2">"12")
console.log(undefined == null)
console.log(undefined === null)
console.log(2>12)
