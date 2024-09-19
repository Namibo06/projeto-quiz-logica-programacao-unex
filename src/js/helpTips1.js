document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('question');
    const openHelpTips = document.getElementById('open-help-tips');
    const showTime = document.getElementById('show-time');

    openHelpTips.addEventListener('click', () => {
        const helpTips = "Indica a união entre duas proposições, sendo verdadeiro quando pelo menos uma delas for verdadeira."
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
            const titleQuestion = 'Qual é o nome do operador lógico representado pelo símbolo "V"?';
            question.textContent=titleQuestion;
        }, 10000);
    });
});

