function sellUserPloops() {
    fetch('/get_user_ploops')
    .then(response => response.json())
    .then(data => {
        // Check if there are any ploops left to sell
        if (data.length === 0) {
            alert("All dupes sold!");
            return;
        }

        // Track the number of ploops sold
        let ploopsSold = 0;
        let errorOccurred = false; // Track if any error occurred

        // Iterate through each ploop
        data.forEach(ploop => {
            const quantityToSell = Math.max(ploop.quantity - 1, 0); // Ensure quantity to sell is not negative

            const payload = {
                "ploop": ploop.ploop,
                "pPrice": ploop.pPrice,
                "quantity": quantityToSell
            };

            // Selling the ploop
            fetch('/selling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(result => {
                // Ploop sold successfully
                console.log("Ploop sold:", result);
                ploopsSold++;

                // Check if all ploops are sold
                if (ploopsSold === data.length && !errorOccurred) {
                    // Alert that all ploop dupes are sold
                    alert("All ploop dupes sold!");
                }
            })
            .catch(error => {
                console.error('Error selling ploop:', error);
                errorOccurred = true; // Set error flag
                // If there's an error, alert all ploop dupes sold
                if (ploopsSold === data.length && errorOccurred) {
                    alert("All ploop dupes sold!");
                }
            });
        });
    })
    .catch(error => console.error('Error fetching user ploops:', error));
}

// Start selling user ploops
sellUserPloops();
