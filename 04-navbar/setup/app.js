// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.getElementById("toggle-content");

toggleBtn.addEventListener("click", function () {
  console.log("btn clicked");
  const ul = document.querySelector("ul");
  console.log(ul.classList.toggle("toggle-content"));
});
console.log(toggleBtn);
