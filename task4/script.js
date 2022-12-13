const change_text = document.querySelector("#change_text");

change_text.addEventListener("click", (event) => {
  
    const prompt_text = prompt("Введите новый текст для изменения");
    change_text.textContent = prompt_text;
     preventDefault();
})