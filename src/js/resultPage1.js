document.addEventListener('DOMContentLoaded',()=>{
    const disjuncao = document.getElementById('disjuncao');
    const conjuncao = document.getElementById('conjuncao');
    const condicional = document.getElementById('condicional');
    const bicondicional = document.getElementById('bicondicional');
    let totalPoints = 0;
    const outGame = document.getElementById('out-game');

    outGame.addEventListener('click',()=>{
        totalPoints = 0;

        localStorage.setItem('totalPoints',totalPoints);
    });

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

        disjuncao.style.border="2px solid #f5f5f5";

        disjuncao.innerHTML="Disjunção  10pts";
        conjuncao.innerHTML="Conjunção  0pts";
        condicional.innerHTML="Condicional  0pts";
        bicondicional.innerHTML="Bi-condicional 0pts";

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

        conjuncao.style.border="2px solid #f5f5f5";
        disjuncao.innerHTML="Disjunção  10pts";
        conjuncao.innerHTML="Conjunção  0pts";
        condicional.innerHTML="Condicional  0pts";
        bicondicional.innerHTML="Bi-condicional 0pts";

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

        condicional.style.border="2px solid #f5f5f5";
        disjuncao.innerHTML="Disjunção  10pts";
        conjuncao.innerHTML="Conjunção  0pts";
        condicional.innerHTML="Condicional  0pts";
        bicondicional.innerHTML="Bi-condicional 0pts";

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

        bicondicional.style.border="2px solid #f5f5f5";
        disjuncao.innerHTML="Disjunção  10pts";
        conjuncao.innerHTML="Conjunção  0pts";
        condicional.innerHTML="Condicional  0pts";
        bicondicional.innerHTML="Bi-condicional 0pts";

        setTimeout(() => {
            window.location.href="page2.html";
        }, 3000);
    });
});