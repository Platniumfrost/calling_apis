console.log("hello is this working??");

fetch("https://iskarr.github.io/austindonovan.github.io/api/business.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
