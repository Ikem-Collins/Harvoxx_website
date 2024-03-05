// alert("Page Not Found")
// console.log("Welcome to my Homepage")


// var num1 = 10
// var num2 = 12.4

// var name = "John@123"
// console.log(name)

// var loading = true

// var number = num1
// console.log(number)

// mathematical Operations and Operators 
// +, -, * , /, **, %

// var num1 = 6
// var num2 = 3
// var sum = num1 + num2
// console.log(sum)

// var fig1 = 2
// var fig2 = 5
// var fig3 = 1
// var fig4 = 7
// var fig5 = 3
// var fig6 = 8
// var fig7 = 10
// var fig8 = 20
// var fig9 = 4
// var fig10 = 19

// var solution = (fig1 + fig2 + fig3 + fig4 + fig5 + fig6 + fig7 + fig8 + fig9) * fig10
// console.log(solution)


// Conditional Statements - If Else Statements 
// >, <, <=, >=, !=, ==, ===


// if (true) {
//     console.log("Yes")
// }

// if (5 > 3) {
//     console.log("Your conditional statement is TRUE")
// }


// var person = "John"

// if (person != "John") {
//     console.log("Your conditional statemt is TRUE")
// } else {
//     console.log("Sorry! Your conditional statment is wrong")
// }

// if (5 > 6) {
//     console.log("5 is the greatest")
// } else {
//     console.log("5 is not the greatest")
// }

// var num1 = 2
// var num2 = 7

// if (num1 > num2) {

//     console.log("num1 is greater than num2")
// } else {
//     console.log("num2 is greater than num1")
// }

// Concatenation allows you join two or more datatypes together.

// var num1 = 20
// var num2 = 17

// if (num1 > num2) {

//     console.log(num1 + " is greater than " + num2)
// } else {
//     console.log(num2 + " is greater than " + num1)
// }

// MULTIPLE IF ELSE STATEMENT

// var message = "welcome"


// if (message == "Hi") {
//     console.log("Hi, how are you doing")
// } else if (message == "I am fine") {
//     console.log("Great, you are in good shape")
// } else if (message == "I need help") {
//     console.log("Kindly check the help section of this page")
// } else {
//     console.log(" Snap!! server down ")
// }


// var level = "Jss3"
// var age = 19
// var grade = 70

// if (level == "Jss3") {
//     if (age <= 18) {

//         if (grade >= 70) {
//             console.log("You are allowed")
//         } else {
//             console.log("Your grade is too low")
//         }
//     } else {
//         console.log("Your age is not allowed")
//     }
// } else {
//     console.log("Your class is not allowed")
// }

// LOGICAL STATEMENTS
// Logical statements are IF ELSE STATEMENTS done using logical operators  
// Logical operators are used to compare multiple two or more conditional expressions (logical operations) 
// which will resolve  to true or false

// Operators 
// AND = &&
// OR = ||

// For security reasons, logical operation is more strict with information or navigation, while nested IF narrows down to which is wrong
// var age = 19
// var level = "Jss3"
// var grade = 90

// if (level == "Jss1" && age <= 18 && grade >= 70) {
//     console.log("You are allowed")
// } else {
//     console.log("Your Level, Age or Grade is not allowed")
// }



// ASSIGNMET also check using LOGICAL STATEMENT
// var username = "collins"
// var password = "HarvoxxDSP300$$"

// if (username == "collins") {
//     if (password == "HarvoxxDSP30$$") {
//         console.log("You are logged in")
//     } else {
//         console.log("Password incorrect")
//     }

// } else {
//     console.log("username incorrect")
// }

// LOGICAL STATEMENT SECTION
// if (username == "collins" && password == "HarvoxxDSP30$$") {

//     console.log("You are logged in")
// } else {
//     console.log("Username and Password incorrect")
// }



// ARRAYS::: 
// A variable to stores multiple values 

// var num1 = 4
// var num = [4, 7, 2, 9, 3, "John", num1, true]

// ARRAY OPERATIONS = C.R.U.D OPERATION
// Retrieving data or value from the array - this is a method of fetching data from the array
// console.log(num[0] + num[1])

// UPDATING DATA
// There are methods of updating array index - PN
// var x = 78
// console.log(x)
// x=60
// console.log(x)
// console.log(num)
// num[5] = "Mary"
// console.log(num)

// INSERTING A DATA 
// num[8] = "James"
// console.log(num)
// DELETION

// === MULTI-DIMENSIONAL ARRAYS 
// These are arrays are that has other arrays in them, they can be called a Nexted Array.

// var num = [4, 7, 2, 9, 3, "John", num1, true, [
//         ["rice", "stew"], 60, 70
//     ]]
// num[8][1]
// console.log(num[8][0][0])

// OBJECTS - They are similar to arrays, but they are more descriptive of the kind of values they are storing.
// It stores values relating to an object at a given time

// var person = { name: "John", age: 27, is_eating: true }
// OBJECT OPERATIONS 
// person.name
// console.log(person.name)
// console.log(person.age)
// console.log(person.is_eating)

// UPDATING - select the data and assign something else to it 
// person.name = "Maxwell"
// console.log(person.name)


// INSERTND DATA - select a property that is not there and make it = something 
// person.hobby = "coding"
// console.log(person)

// MULTIDIMENSIONAL OBJECT OR NEXTED OBJECT
// var person = {
//     name: "John",
//     age: 27,
//     is_eating: true,
//     result: {
//         maths: 100,
//         english: 90,
//         physics: {
//             pract: 25,
//             theory: 65,
//             students: ["John", "Mary", "James", { total_student: 3 }]
//         }
//     }
// }
// console.log(person.result.physics.students[3].total_student)


// LOOPS - programs that can run repeatedly until it is broken
// TYPES OF LOOP
// -FOR LOOP
// -WHILE LOOP
// -DO-WHILE LOOP

// syntax 
// while(){

// }

var x = 0
while (x < 100) {
    if (x % 2 == 0)
        console.log(x)
    x = x + 1
}