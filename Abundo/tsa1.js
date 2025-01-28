document.getElementById("colorbutton").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("blue-mode");
    this.textContent = body.classList.contains("blue-mode") ? "Change Color" : "Change Color";
});