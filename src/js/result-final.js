document.addEventListener('DOMContentLoaded',()=>{
    const result = document.getElementById('result');
    const phrase = document.getElementById('phrase');
    let agreedIssues = parseInt(localStorage.getItem('totalPoints')) / 10;
    let quantityQuestions = 3;

    let resultQuestions = agreedIssues / quantityQuestions;

    if(resultQuestions === 1){
        const phraseContent = "Parabéns você atingiu a pontuação máxima, e ainda se diz iniciante? Calma lá, respira que já já teremos uma parte 2 do nosso quiz, deu para perceber que você detém um domínio do assunto, desde já desejamos boa sorte para você nos seus estudos, e até a próxima.";

        console.log(`${agreedIssues} / ${quantityQuestions}`);
        result.innerHTML = `${agreedIssues} / ${quantityQuestions}`;
        phrase.innerHTML = phraseContent; 
    }else if(resultQuestions >= 0.75 && resultQuestions <= 1){
        const phraseContent = "Parabéns você quase conseguiu, precisa estudar só um pouquinho mais, porém já tem um ótimo resultado para esbanjar, deu pra notar que ou você já entende um pouco do assunto ou é muito sortudo(a), até a próxima.";
        console.log(`${agreedIssues} / ${quantityQuestions}`);

        result.innerHTML = `${agreedIssues} / ${quantityQuestions}`;
        phrase.innerHTML = phraseContent; 
    }else if(resultQuestions >= 0.50 && resultQuestions <= 0.75){
        const phraseContent = "Você atingiu uma marca medial, precisa estudar mais, porém com seu resultado presumo que se esforçou até o final, é isso, até a próxima.";
        console.log(`${agreedIssues} / ${quantityQuestions}`);

        result.innerHTML = `${agreedIssues} / ${quantityQuestions}`;
        phrase.innerHTML = phraseContent; 
    }else if(resultQuestions >= 0.25 && resultQuestions <= 0.50){
        const phraseContent = "Por muito pouco você chegaria a média, mas isso acontece fica tranquilo(a), basta agora matar sua curiosidade, e buscar mais o assunto, desejo uma boa sorte, e até a próxima.";
        console.log(`${agreedIssues} / ${quantityQuestions}`);

        result.innerHTML = `${agreedIssues} / ${quantityQuestions}`;
        phrase.innerHTML = phraseContent; 
    }else if(resultQuestions >= 0.00 && resultQuestions <= 0.25){
        const phraseContent = "Ok ok isso não é o fim da vida, não se preocupe você tem tentativas ilimitadas, estude um pouco, veja mais sobre o assunto e volte para tentar novamente, desde já boa sorte, e até a próxima.";
        console.log(`${agreedIssues} / ${quantityQuestions}`);

        result.innerHTML = `${agreedIssues} / ${quantityQuestions}`;
        phrase.innerHTML = phraseContent; 
    }
});