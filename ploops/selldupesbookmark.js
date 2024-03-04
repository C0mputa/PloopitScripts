javascript:(function(){
    var scriptUrl = 'https://raw.githubusercontent.com/C0mputa/PloopitScripts/main/ploops/selldupes.js';

    fetch(scriptUrl)
        .then(response => response.text())
        .then(script => {
            var scriptElement = document.createElement('script');
            scriptElement.innerHTML = script;
            document.head.appendChild(scriptElement);
        })
        .catch(error => {
            console.error('Error fetching script:', error);
            alert('Failed to fetch script: ' + error.message);
        });
})();
