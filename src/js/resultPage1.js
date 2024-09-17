document.addEventListener('DOMContentLoaded',()=>{
    const disjuncao = document.getElementById('disjuncao');
    const conjuncao = document.getElementById('conjuncao');
    const condicional = document.getElementById('condicional');
    const bicondicional = document.getElementById('bicondicional');
    let totalPoints = 0;

    disjuncao.addEventListener('click',()=>{
        totalPoints = 10;

        localStorage.setItem('totalPoints',totalPoints);

        disjuncao.style.backgroundColor="rgb(0,200,200)";
        disjuncao.style.color="#f5f5f5";
        conjuncao.style.backgroundColor="#ff0000";
        conjuncao.style.color="#f5f5f5";
        condicional.style.backgroundColor="#ff0000";
        condicional.style.color="#f5f5f5";
        bicondicional.style.backgroundColor="#ff0000";
        bicondicional.style.color="#f5f5f5";

        setTimeout(() => {
            window.location.href="page2.html";
        }, 3000);
    });

    conjuncao.addEventListener('click',()=>{
        totalPoints = 0;

        localStorage.setItem('totalPoints',totalPoints);

        disjuncao.style.backgroundColor="rgb(0,200,200)";
        disjuncao.style.color="#f5f5f5";
        conjuncao.style.backgroundColor="#ff0000";
        conjuncao.style.color="#f5f5f5";
        condicional.style.backgroundColor="#ff0000";
        condicional.style.color="#f5f5f5";
        bicondicional.style.backgroundColor="#ff0000";
        bicondicional.style.color="#f5f5f5";

        setTimeout(() => {
            window.location.href="page2.html";
        }, 3000);
        bicondicional.style.color="#f5f5f5";
    });

    condicional.addEventListener('click',()=>{
        totalPoints = 0;

        localStorage.setItem('totalPoints',totalPoints);

        disjuncao.style.backgroundColor="rgb(0,200,200)";
        disjuncao.style.color="#f5f5f5";
        conjuncao.style.backgroundColor="#ff0000";
        conjuncao.style.color="#f5f5f5";
        condicional.style.backgroundColor="#ff0000";
        condicional.style.color="#f5f5f5";
        bicondicional.style.backgroundColor="#ff0000";
        bicondicional.style.color="#f5f5f5";

        setTimeout(() => {
            window.location.href="page2.html";
        }, 3000);
    });

    bicondicional.addEventListener('click',()=>{
        totalPoints = 0;

        localStorage.setItem('totalPoints',totalPoints);

        disjuncao.style.backgroundColor="rgb(0,200,200)";
        disjuncao.style.color="#f5f5f5";
        conjuncao.style.backgroundColor="#ff0000";
        conjuncao.style.color="#f5f5f5";
        condicional.style.backgroundColor="#ff0000";
        condicional.style.color="#f5f5f5";
        bicondicional.style.backgroundColor="#ff0000";
        bicondicional.style.color="#f5f5f5";

        setTimeout(() => {
            window.location.href="page2.html";
        }, 3000);
    });
});