// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
accounts.forEach((acc) => {
  const { owner, movements } = acc;

  const withdraw = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  const deposit = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  console.log(`
  *****************************************
    Good day ${owner}, here is your montly statement:
    Total Withdraw: $${Math.abs(withdraw)}
    Total Deposit: $${deposit}
    ****************************************
  `);
});
const totalMovements = account1.movements.concat(
  account2.movements,
  account3.movements,
  account4.movements
);
totalWithdrawn = totalMovements
  .filter((mov) => mov < 0)
  .reduce((acc, mov) => acc + mov, 0);
totalDeposit = totalMovements
  .filter((mov) => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalMovements, totalWithdrawn, totalDeposit);
console.log(`
**************************************************
  The total In and Out flow of money in the month is :
  Deposits: $${totalDeposit}
  Withdraws: $${Math.abs(totalWithdrawn)}
  ************************************************
`);
console.log(totalMovements);
console.log(totalMovements.at(-8));
const names = ["james", "john", 0];
console.log(names.every((name) => typeof name === "string"));
// console.log(typeof names[0]);
