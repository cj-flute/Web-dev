const jokeBtn = document.querySelector("#jokeBtn");
const cate = document.querySelector("#categories");
const jokesContainer = document.querySelector(".jokes");

const request = new XMLHttpRequest();

request.open("GET", "users.json");
request.send();
request.addEventListener("load", (data) => {
  console.log(JSON.parse(data.target.responseText));
});
// jokeBtn.addEventListener("click", () => {
//   const jokeCategory = cate.value;
//   const url = `https://v2.jokeapi.dev/joke/${jokeCategory}`;

//   request.open("GET", url);
//   request.send();

//   request.addEventListener("load", function (data) {
//     const d = JSON.parse(data.target.responseText);
//     console.log(d.joke);
//     d.type === "twopart"
//       ? createJokeUI(d.type, d.setup, d.delivery)
//       : createJokeUI(d.type, d.joke);
//   });
// });

// function createJokeUI(type, joke, delivery = "No two part joke") {
//   jokesContainer.innerHTML = "";
//   const html = `<div class="header">
//         <h3><span id="type">${type}</span> JOKE</h3>
//       </div>
//       <div class="content">
//         <h3 id="setup">
//           ${joke}
//         </h3>
//         <h4 id="delivery">${delivery}</h4>
//       </div>
//       `;
//   jokesContainer.insertAdjacentHTML("afterBegin", html);
// }
