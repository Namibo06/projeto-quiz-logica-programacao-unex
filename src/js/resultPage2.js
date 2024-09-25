document.addEventListener('DOMContentLoaded',()=>{
    const expressaoVerdadeira = document.getElementById('expressao-verdadeira');
    const fraseSemSignificado = document.getElementById('frase-sem-significado');
    const declaracaoVerdadeiraOuFalsa = document.getElementById('declaracao-verdadeira-ou-falsa');
    const expressaoMatematica = document.getElementById('expressao-matematica');
    const outGame = document.getElementById('out-game');

    let totalPoints = parseInt(localStorage.getItem('totalPoints'));

    outGame.addEventListener('click',()=>{
        totalPoints = 0;

        localStorage.setItem('totalPoints',totalPoints);
    });

    declaracaoVerdadeiraOuFalsa.addEventListener('click',()=>{
        totalPoints += 10;

        localStorage.setItem('totalPoints',totalPoints);

        declaracaoVerdadeiraOuFalsa.style.backgroundColor="rgb(0,200,200)";
        declaracaoVerdadeiraOuFalsa.style.color="#f5f5f5";
        fraseSemSignificado.style.backgroundColor="#ff0000";
        fraseSemSignificado.style.color="#f5f5f5";
        expressaoVerdadeira.style.backgroundColor="#ff0000";
        expressaoVerdadeira.style.color="#f5f5f5";
        expressaoMatematica.style.backgroundColor="#ff0000";
        expressaoMatematica.style.color="#f5f5f5";

        declaracaoVerdadeiraOuFalsa.style.border="2px solid #f5f5f5";

        declaracaoVerdadeiraOuFalsa.innerHTML="Uma declaração que pode ser verdadeira ou falsa 10pts";
        fraseSemSignificado.innerHTML="Uma frase sem significado  0pts";
        expressaoVerdadeira.innerHTML="  Uma expressão verdadeira  0pts";
        expressaoMatematica.innerHTML="Uma expressão matemática  0pts";

        setTimeout(() => {
            window.location.href="page3.html";
        }, 3000);
    });

    fraseSemSignificado.addEventListener('click',()=>{
        totalPoints += 0;

        localStorage.setItem('totalPoints',totalPoints);

        declaracaoVerdadeiraOuFalsa.style.backgroundColor="rgb(0,200,200)";
        declaracaoVerdadeiraOuFalsa.style.color="#f5f5f5";
        fraseSemSignificado.style.backgroundColor="#ff0000";
        fraseSemSignificado.style.color="#f5f5f5";
        expressaoVerdadeira.style.backgroundColor="#ff0000";
        expressaoVerdadeira.style.color="#f5f5f5";
        expressaoMatematica.style.backgroundColor="#ff0000";
        expressaoMatematica.style.color="#f5f5f5";

        fraseSemSignificado.style.border="2px solid #f5f5f5";

        declaracaoVerdadeiraOuFalsa.innerHTML="Uma declaração que pode ser verdadeira ou falsa 10pts";
        fraseSemSignificado.innerHTML="Uma frase sem significado  0pts";
        expressaoVerdadeira.innerHTML="  Uma expressão verdadeira  0pts";
        expressaoMatematica.innerHTML="Uma expressão matemática  0pts";

        setTimeout(() => {
            window.location.href="page3.html";
        }, 3000);
    });

    expressaoVerdadeira.addEventListener('click',()=>{
        totalPoints += 0;

        localStorage.setItem('totalPoints',totalPoints);

        declaracaoVerdadeiraOuFalsa.style.backgroundColor="rgb(0,200,200)";
        declaracaoVerdadeiraOuFalsa.style.color="#f5f5f5";
        fraseSemSignificado.style.backgroundColor="#ff0000";
        fraseSemSignificado.style.color="#f5f5f5";
        expressaoVerdadeira.style.backgroundColor="#ff0000";
        expressaoVerdadeira.style.color="#f5f5f5";
        expressaoMatematica.style.backgroundColor="#ff0000";
        expressaoMatematica.style.color="#f5f5f5";

        expressaoVerdadeira.style.border="2px solid #f5f5f5";

        declaracaoVerdadeiraOuFalsa.innerHTML="Uma declaração que pode ser verdadeira ou falsa 10pts";
        fraseSemSignificado.innerHTML="Uma frase sem significado  0pts";
        expressaoVerdadeira.innerHTML="  Uma expressão verdadeira  0pts";
        expressaoMatematica.innerHTML="Uma expressão matemática  0pts";

        setTimeout(() => {
            window.location.href="page3.html";
        }, 3000);
    });

    expressaoMatematica.addEventListener('click',()=>{
        totalPoints += 0;

        localStorage.setItem('totalPoints',totalPoints);

        declaracaoVerdadeiraOuFalsa.style.backgroundColor="rgb(0,200,200)";
        declaracaoVerdadeiraOuFalsa.style.color="#f5f5f5";
        fraseSemSignificado.style.backgroundColor="#ff0000";
        fraseSemSignificado.style.color="#f5f5f5";
        expressaoVerdadeira.style.backgroundColor="#ff0000";
        expressaoVerdadeira.style.color="#f5f5f5";
        expressaoMatematica.style.backgroundColor="#ff0000";
        expressaoMatematica.style.color="#f5f5f5";

        expressaoMatematica.style.border="2px solid #f5f5f5";

        declaracaoVerdadeiraOuFalsa.innerHTML="Uma declaração que pode ser verdadeira ou falsa 10pts";
        fraseSemSignificado.innerHTML="Uma frase sem significado  0pts";
        expressaoVerdadeira.innerHTML="  Uma expressão verdadeira  0pts";
        expressaoMatematica.innerHTML="Uma expressão matemática  0pts";

        setTimeout(() => {
            window.location.href="page3.html";
        }, 3000);
    });
});