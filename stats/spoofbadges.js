(async () => {
    try {
        const response = await fetch("/get_badges");
        const badges = await response.json();
        const badgesContainer = document.querySelector(".badges");
        badgesContainer.innerHTML = "";

        badges.forEach(badge => {
            // Skip the collector badge
            if (badge.name.toLowerCase() === "collector") {
                return;
            }
            
            const badgeImage = document.createElement("img");
            // Prepend the base URL to the badge image URL
            badgeImage.src = "https://ploopit.org/static/images/badges/" + badge.image;
            badgeImage.alt = badge.name;
            badgeImage.classList.add("badge-image");
            // Set the width to 45px and height to auto
            badgeImage.style.width = "45px";
            badgeImage.style.height = "auto";
            badgesContainer.appendChild(badgeImage);
        });
    } catch (error) {
        console.error("Error fetching badges:", error);
    }
})();
