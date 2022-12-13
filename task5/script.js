const change_text = document.querySelector("#enterField");
const new_text = document.querySelector("#duplicateField");
const submit = document.querySelector("button");

change_text.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    new_text.textContent = this.value;
  }
});

submit.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    console.log(change_text.value);
    change_text.value = "";
  }
  e.preventDefault();
});
