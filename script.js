const value = document.getElementById("value");
const buttons = document.querySelector(".buttons");
const toggleBtn = document.querySelector(".toggleBtn");
const body = document.body;

buttons.addEventListener("click", function (event) {
    const button = event.target;
    if (button.tagName === "SPAN") {
        if (button.textContent === "=") {
            value.textContent = eval(value.textContent);
        } else if (button.textContent === "Clear") {
            value.textContent = "";
        } else {
            value.textContent += button.textContent;
        }
    }
});

toggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark");
});
