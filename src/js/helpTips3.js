document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('question');
    const openHelpTips = document.getElementById('open-help-tips');
    const showTime = document.getElementById('show-time');

    openHelpTips.addEventListener('click', () => {
        const helpTips = "A resposta pode ser tanto nome quanto símbolo, mas sabemos que tem Negação no meio😉"
        question.textContent=helpTips;

       
        for (let i = 10; i >= 0; i--) {
            setTimeout(() => {
                if(i >= 10){
                    showTime.textContent="00:"+i;
                }
                else if(i === 0){
                    showTime.textContent="";
                }else{
                    showTime.textContent="00:0"+i;
                }   

                
            }, (10 - i) * 1000);
        }

        setTimeout(() => {
            const titleQuestion = 'Quais são os 4 operadores lógicos de lógica proposicional?';
            question.textContent=titleQuestion;
        }, 10000);
    });
});