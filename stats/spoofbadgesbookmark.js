javascript:(function() {
    fetch('https://raw.githubusercontent.com/C0mputa/PloopitScripts/main/stats/spoofbadges.js')
    .then(response => response.text())
    .then(scriptText => {
        eval(scriptText);
    })
    .catch(error => {
        console.error('Error fetching or executing the script:', error);
    });
})();
