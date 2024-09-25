document.addEventListener('DOMContentLoaded',()=>{
    const htmlCss = document.getElementById('html-css');
    const conjuncaoDisjuncao = document.getElementById('conjuncao-disjuncao');
    const ifElse = document.getElementById('if-else');
    const simbolos = document.getElementById('simbolos');
    const outGame = document.getElementById('out-game');

    let totalPoints = parseInt(localStorage.getItem('totalPoints'));

    outGame.addEventListener('click',()=>{
        totalPoints = 0;

        localStorage.setItem('totalPoints',totalPoints);
    });

    htmlCss.addEventListener('click',()=>{
        totalPoints += 0;

        localStorage.setItem('totalPoints',totalPoints);

        conjuncaoDisjuncao.style.backgroundColor="rgb(0,200,200)";
        conjuncaoDisjuncao.style.color="#f5f5f5";
        htmlCss.style.backgroundColor="#ff0000";
        htmlCss.style.color="#f5f5f5";
        ifElse.style.backgroundColor="#ff0000";
        ifElse.style.color="#f5f5f5";
        simbolos.style.backgroundColor="#ff0000";
        simbolos.style.color="#f5f5f5";

        htmlCss.style.border="2px solid #f5f5f5";

        /**estilos pra não quebrar */
        htmlCss.style.fontSize="16px";
        conjuncaoDisjuncao.style.fontSize="16px";
        ifElse.style.fontSize="16px";
        simbolos.style.fontSize="16px";

        htmlCss.innerHTML="HTML, CSS, JavaScript, e PHP  0pts";
        conjuncaoDisjuncao.innerHTML="Conjunção, Disjunção, Condicional, e Negação  10pts";
        ifElse.innerHTML="If, Else, While, e For  0pts";
        simbolos.innerHTML="⋀, ⋁, ←→, e !  0pts";

        setTimeout(() => {
            window.location.href="page4.html";
        }, 3000);
    });

    conjuncaoDisjuncao.addEventListener('click',()=>{
        totalPoints += 10;

        localStorage.setItem('totalPoints',totalPoints);

        conjuncaoDisjuncao.style.backgroundColor="rgb(0,200,200)";
        conjuncaoDisjuncao.style.color="#f5f5f5";
        htmlCss.style.backgroundColor="#ff0000";
        htmlCss.style.color="#f5f5f5";
        ifElse.style.backgroundColor="#ff0000";
        ifElse.style.color="#f5f5f5";
        simbolos.style.backgroundColor="#ff0000";
        simbolos.style.color="#f5f5f5";

        conjuncaoDisjuncao.style.border="2px solid #f5f5f5";

        /**estilos pra não quebrar */
        htmlCss.style.fontSize="16px";
        conjuncaoDisjuncao.style.fontSize="16px";
        ifElse.style.fontSize="16px";
        simbolos.style.fontSize="16px";

        htmlCss.innerHTML="HTML, CSS, JavaScript, e PHP  0pts";
        conjuncaoDisjuncao.innerHTML="Conjunção, Disjunção, Condicional, e Negação  10pts";
        ifElse.innerHTML="If, Else, While, e For  0pts";
        simbolos.innerHTML="⋀, ⋁, ←→, e !  0pts";

        setTimeout(() => {
            window.location.href="page4.html";
        }, 3000);
    });

    ifElse.addEventListener('click',()=>{
        totalPoints += 0;

        localStorage.setItem('totalPoints',totalPoints);

        conjuncaoDisjuncao.style.backgroundColor="rgb(0,200,200)";
        conjuncaoDisjuncao.style.color="#f5f5f5";
        htmlCss.style.backgroundColor="#ff0000";
        htmlCss.style.color="#f5f5f5";
        ifElse.style.backgroundColor="#ff0000";
        ifElse.style.color="#f5f5f5";
        simbolos.style.backgroundColor="#ff0000";
        simbolos.style.color="#f5f5f5";

        ifElse.style.border="2px solid #f5f5f5";

        /**estilos pra não quebrar */
        htmlCss.style.fontSize="16px";
        conjuncaoDisjuncao.style.fontSize="16px";
        ifElse.style.fontSize="16px";
        simbolos.style.fontSize="16px";

        htmlCss.innerHTML="HTML, CSS, JavaScript, e PHP  0pts";
        conjuncaoDisjuncao.innerHTML="Conjunção, Disjunção, Condicional, e Negação  10pts";
        ifElse.innerHTML="If, Else, While, e For  0pts";
        simbolos.innerHTML="⋀, ⋁, ←→, e !  0pts";

        setTimeout(() => {
            window.location.href="page4.html";
        }, 3000);
    });

    simbolos.addEventListener('click',()=>{
        totalPoints += 0;

        localStorage.setItem('totalPoints',totalPoints);

        conjuncaoDisjuncao.style.backgroundColor="rgb(0,200,200)";
        conjuncaoDisjuncao.style.color="#f5f5f5";
        htmlCss.style.backgroundColor="#ff0000";
        htmlCss.style.color="#f5f5f5";
        ifElse.style.backgroundColor="#ff0000";
        ifElse.style.color="#f5f5f5";
        simbolos.style.backgroundColor="#ff0000";
        simbolos.style.color="#f5f5f5";

        simbolos.style.border="2px solid #f5f5f5";

        /**estilos pra não quebrar */
        htmlCss.style.fontSize="16px";
        conjuncaoDisjuncao.style.fontSize="16px";
        ifElse.style.fontSize="16px";
        simbolos.style.fontSize="16px";

        htmlCss.innerHTML="HTML, CSS, JavaScript, e PHP  0pts";
        conjuncaoDisjuncao.innerHTML="Conjunção, Disjunção, Condicional, e Negação  10pts";
        ifElse.innerHTML="If, Else, While, e For  0pts";
        simbolos.innerHTML="⋀, ⋁, ←→, e !  0pts";

        setTimeout(() => {
            window.location.href="page4.html";
        }, 3000);
    });
});