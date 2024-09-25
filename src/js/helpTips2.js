document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('question');
    const openHelpTips = document.getElementById('open-help-tips');
    const showTime = document.getElementById('show-time');

    openHelpTips.addEventListener('click', () => {
        const helpTips = "Se a frase faz sentido e podemos dizer se ela é verdadeira ou não, isso é uma proposição!"
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
            const titleQuestion = 'O que é uma proposição?';
            question.textContent=titleQuestion;
        }, 10000);
    });
});