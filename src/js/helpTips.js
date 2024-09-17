document.addEventListener('DOMContentLoaded', () => {
    const helpTips = document.getElementById('help-tips');
    const openHelpTips = document.getElementById('open-help-tips');
    const closeHelpTips = document.getElementById('close-help-tips');

    openHelpTips.addEventListener('click', () => {
        openHelpTips.style.display="none";
        helpTips.style.display="block";
    });

    closeHelpTips.addEventListener('click',() => {
        openHelpTips.style.display="block";
        helpTips.style.display="none";
    });
});

