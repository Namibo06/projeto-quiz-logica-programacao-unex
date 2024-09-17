document.addEventListener('DOMContentLoaded',() => {
    const startGame = document.getElementById("start-game");

    startGame.addEventListener("click", () => {
        window.location.href = "./src/pages/page1.html";
    });
});