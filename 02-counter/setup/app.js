// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else {
      count++;
    }

    value.style.color =
      count > 0 ? "green" : count < 0 ? "red" : count === 0 ? "#222" : "";

    value.textContent = count;
  });
});
