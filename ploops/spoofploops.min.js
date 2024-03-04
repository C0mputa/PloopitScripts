javascript:(function() {
    var scriptUrl = 'https://raw.githubusercontent.com/C0mputa/PloopitScripts/main/ploops/spoofploops.js';
    fetch(scriptUrl)
        .then(response => response.text())
        .then(script => {
            console.log('Fetched script:', script);
            eval(script);
        })
        .catch(error => {
            console.error('Error fetching script:', error);
        });
})();
