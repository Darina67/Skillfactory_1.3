document.addEventListener("click", (event) => {
  if (event.target.nodeName === "BUTTON") {
    console.log("clicked", event.target.textContent);
  }
});
