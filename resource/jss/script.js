/*
const number = [1,2,3,5,6,7,8]

// console.log(number[0]);


//Using for loop
for(let index = 0; index < number.length; index++){
    console.log(`index: ${index} = ${number[index]}`);
}
console.log('-----------------------------------');
// Using for each loop
number.forEach((num, index) =>{
    console.log(`index: ${index} = ${num}`);
})
console.log('-----------------------------------');
//Using for of //Es20
for(const num of number.entries()){
    console.log(`index: ${num[0]} = ${num[1]}`);
}
console.log('-----------------------------------');
//better still, put two variables because entrice takes two parameteres
//this is known as destructuring
for(const [index,value] of number.entries()){
    console.log(`index: ${index} = ${value}`);
}
console.log('-----------------------------------');
*/
   
//Using For of on Objects

/*
//Destructuring an array
const players = [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
]

const goalkeeper = players[0];
const player11 = players[10];
const [gk, p1,p2,p3,,,,,,,p11] = players;
console.log(gk,p11,p3);
*/

const users = {
    name: "Jackson",
    age: 20,
    schoolInfo:{
        name: "Federal Polytechnic Oko",
        department: "Computer Engineering",
        level: "ND2",
        courses: ["Physics", "Mathematics", "Chemistry"]
    },
};

//Destructuring an object
const {schoolInfo:{courses:[,,chem]}} = users;
console.log(chem);

/*
for(const obj of Object.keys(users)){
    console.log(obj);
}
for(const obj of Object.values(users)){
    console.log(obj);
}
console.log('-----------------------------------');
for(const obj of Object.entries(users)){
    console.log(`${obj[0]} : ${obj[1]}`);
}
console.log('-----------------------------------');
// alternatively, by destructuring 
for(const [key,value] of Object.entries(users)){
    console.log(`${key} : ${value}`);
}
*/







// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//     [
//     'Neuer',
//     'Pavard',
//     'Martinez',
//     'Alaba',
//     'Davies',
//     'Kimmich',
//     'Goretzka',
//     'Coman',
//     'Muller',
//     'Gnarby',
//     'Lewandowski',
//     ],
//     [
//     'Burki',
//     'Schulz',
//     'Hummels',
//     'Akanji',
//     'Hakimi',
//     'Weigl',
//     'Witsel',
//     'Hazard',
//     'Brandt',
//     'Sancho',
//     'Gotze',
//     ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//     },
//     };