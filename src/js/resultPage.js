document.addEventListener('DOMContentLoaded',()=>{
    document.addEventListener('DOMContentLoaded',()=>{
        const response1 = document.getElementById('response1');
        const response2 = document.getElementById('response2');
        const response3 = document.getElementById('response3');
        const response4 = document.getElementById('response4');
        let totalPoints = 0;
        const outGame = document.getElementById('out-game');
    
        outGame.addEventListener('click',()=>{
            totalPoints = 0;
    
            alterPoints(totalPoints);
        });
    
        response1.addEventListener('click',()=>{
            if(localStorage.getItem('totalPoints') >= 0){
                totalPoints = localStorage.getItem('totalPoints') + 10;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }else{
                totalPoints = 10;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }
        });
    
        response2.addEventListener('click',()=>{
            if(localStorage.getItem('totalPoints') >= 0){
                totalPoints = localStorage.getItem('totalPoints') + 0;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }else{
                totalPoints = 0;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }
        });
    
        response3.addEventListener('click',()=>{
            if(localStorage.getItem('totalPoints') >= 0){
                totalPoints = localStorage.getItem('totalPoints') + 0;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }else{
                totalPoints = 0;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }
        });
    
        response4.addEventListener('click',()=>{
            if(localStorage.getItem('totalPoints') >= 0){
                totalPoints = localStorage.getItem('totalPoints') + 0;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }else{
                totalPoints = 0;
    
                alterPoints(totalPoints);
                changeDisplay();
        
                setTimeout(() => {
                    window.location.href="page2.html";
                }, 3000);
            }
        });
    });

    function alterPoints(points){
        localStorage.setItem('totalPoints',points);
    }

    function changeDisplay(){
        response2.style.backgroundColor="rgb(0,200,200)";
        response2.style.color="#f5f5f5";
        response1.style.backgroundColor="#ff0000";
        response1.style.color="#f5f5f5";
        response3.style.backgroundColor="#ff0000";
        response3.style.color="#f5f5f5";
        response4.style.backgroundColor="#ff0000";
        response4.style.color="#f5f5f5";

        response2.style.border="2px solid #f5f5f5";

        response2.innerHTML="Disjunção  10pts";
        response1.innerHTML="Conjunção  0pts";
        response3.innerHTML="Condicional  0pts";
        response4.innerHTML="Bi-condicional 0pts";
    }
});