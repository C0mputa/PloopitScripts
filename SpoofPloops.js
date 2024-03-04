(function() {
    // Fetch the JSON file
    fetch('https://gist.githubusercontent.com/C0mputa/980c73ccdd10738a3b4d432626b978e5/raw/8eb6b7fc048374f23be68a785c6e23601fc56e21/ploopsData.json')
        .then(response => response.json())
        .then(data => {
            // Loop through each ploop in the JSON data
            data.forEach(ploop => {
                // Check if ploop has pid and rarity properties
                if (ploop.pid && ploop.rarity) {
                    // Get the ploop ID and rarity
                    var ploopId = ploop.pid;
                    var rarity = ploop.rarity;

                    // Find the element in the HTML with the corresponding data-pid attribute
                    var ploopElement = document.querySelector(`[data-pid="${ploopId}"]`);

                    // If the element exists
                    if (ploopElement) {
                        // Add or update the quantity bubble with appropriate style based on rarity
                        var quantityBubble = ploopElement.querySelector('.ploopquantity');
                        if (!quantityBubble) {
                            quantityBubble = document.createElement('div');
                            quantityBubble.classList.add('ploopquantity');
                            ploopElement.insertBefore(quantityBubble, ploopElement.firstChild);
                        }
                        
                        // Set the quantity number between 1 and 584
                        var quantityNumber = Math.floor(Math.random() * 584) + 1;
                        quantityBubble.textContent = quantityNumber.toString();

                        // Apply color based on rarity (capitalizing rarity types)
                        switch (rarity.toLowerCase()) {
                            case 'uncommon':
                                quantityBubble.style.backgroundColor = 'rgb(0, 128, 0)'; // Green
                                break;
                            case 'rare':
                                quantityBubble.style.backgroundColor = 'rgb(0, 0, 255)'; // Blue
                                break;
                            case 'epic':
                                quantityBubble.style.backgroundColor = 'rgb(255, 0, 0)'; // Red
                                break;
                            case 'legendary':
                                quantityBubble.style.backgroundColor = 'rgb(255, 165, 0)'; // Orange
                                break;
                            case 'chroma':
                                quantityBubble.style.backgroundColor = 'rgb(41, 182, 246)'; // Chroma
                                break;
                            case 'mystical':
                                quantityBubble.style.backgroundColor = 'rgb(128, 0, 128)'; // Dark Purple
                                break;
                            default:
                                break;
                        }
                    }
                }
            });
            
            // Look for all elements with class "notunlocked"
            var lockedElements = document.querySelectorAll('.notunlocked');

            // Replace "notunlocked" with "unlocked" and remove lock symbol
            lockedElements.forEach(function(element) {
                element.classList.remove('notunlocked');
                element.parentNode.removeChild(element.previousElementSibling);
            });

            // Fetch the additional script
            fetch('https://gist.githubusercontent.com/C0mputa/ccf4e13cc37880d43b6951b31a37b27c/raw/53c220696953c0311c91cc4cb2fa5556abfad156/sectionhidden.js')
                .then(response => response.text())
                .then(scriptText => {
                    // Create a script element and set its content to the fetched script
                    var scriptElement = document.createElement('script');
                    scriptElement.textContent = scriptText;
                    
                    // Append the script element to the document body to execute it
                    document.body.appendChild(scriptElement);
                })
                .catch(error => console.error('Error fetching and running additional script:', error));
        })
        .catch(error => console.error('Error fetching JSON:', error));
})();
