javascript:(function() {
    function rainbowBackground(element) {
        if (element.nodeType !== 1) return; // Check if it's not an element
        element.style.animation = 'rainbowBackgroundAnimation 0.5s linear infinite'; // Apply rainbow background animation
        for (var i = 0; i < element.childNodes.length; i++) {
            rainbowBackground(element.childNodes[i]);
        }
    }

    // Inject CSS for the rainbow background animation
    var style = document.createElement('style');
    style.innerHTML = `
        @keyframes rainbowBackgroundAnimation {
            0%    { background-color: #9400d3; } /* Violet */
            12.5% { background-color: #4b0082; } /* Indigo */
            25%   { background-color: #0000ff; } /* Blue */
            37.5% { background-color: #00ff00; } /* Green */
            50%   { background-color: #ffff00; } /* Yellow */
            62.5% { background-color: #ff7f00; } /* Orange */
            75%   { background-color: #ff0000; } /* Red */
            87.5% { background-color: #9400d3; } /* Violet */
            100%  { background-color: #9400d3; } /* Violet */
        }
    `;
    document.head.appendChild(style);

    rainbowBackground(document.body);
})();
