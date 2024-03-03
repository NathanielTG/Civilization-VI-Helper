document.addEventListener("DOMContentLoaded", function () {
    // Define tier explanations outside the function
    const tierExplanations = {
        "best": "These wonders are among the best in the game and you should aim to build these in every single one of your games.",
        "good": "Most wonders in the game are worth building, though they are generally geared either towards specific victory conditions, or specific scenarios in which the wonder will give useful benefits.",
        "niche": "These wonders are generally not very good, though they can serve a purpose in very specific situations.",
        "not worth": "These wonders should really be avoided, unless you have absolutely nothing else to build. The wonders in this tier offer very little for the amount of production it costs to build these wonders."
    };

    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const wondersList = document.getElementById("wondersList");

    //List of all wonders
    const wonders = [
        { name: "Great Bath", victory: ["all"], tier: "good" },
        { name: "Hanging Gardens", victory: ["all"], tier: "not worth" },
        { name: "Stonehenge", victory: ["religion"], tier: "good" },
        { name: "Temple of Artemis", victory: ["all"], tier: "best" },
        { name: "Etemenanki", victory: ["science"], tier: "good" },
        { name: "Oracle", victory: ["all"], tier: "good" },
        { name: "Pyramids", victory: ["all"], tier: "good" },
        { name: "Apadana", victory: ["culture", "diplomacy"], tier: "good" },
        { name: "Colosseum", victory: ["all"], tier: "best" },
        { name: "Great Lighthouse", victory: ["domination"], tier: "niche" },
        { name: "Jebel Barkal", victory: ["domination", "culture", "religion"], tier: "good", requiresAllVictories: true },
        { name: "Mahabodhi Temple", victory: ["religion", "diplomacy"], tier: "good", requiresAllVictories: true },
        { name: "Statue of Zeus", victory: ["domination"], tier: "good" },
        { name: "Great Library", victory: ["culture", "science"], tier: "good" },
        { name: "Mausoleum at Halicarnassus", victory: ["science", "culture"], tier: "good" },
        { name: "Colossus", victory: ["all"], tier: "good" },
        { name: "Machu Picchu", victory: ["science", "culture", "diplomacy"], tier: "good" },
        { name: "Petra", victory: ["all"], tier: "good" },
        { name: "Terracotta Army", victory: ["domination", "culture"], tier: "good", requiresAllVictories: true },
        { name: "Hagia Sophia", victory: ["religion"], tier: "good" },
        { name: "Huey Teocalli", victory: ["all"], tier: "good" },
        { name: "Kilwa Kisiwani", victory: ["all"], tier: "best" },
        { name: "Meenakshi Temple", victory: ["religion"], tier: "niche" },
        { name: "Kotoku-in", victory: ["religion", "domination"], tier: "not worth", requiresAllVictories: true },
        { name: "Mont St. Michel", victory: ["culture", "religion"], tier: "good", requiresAllVictories: true },
        { name: "Alhambra", victory: ["domination"], tier: "good" },
        { name: "University of Sankore", victory: ["science", "religion"], tier: "good", requiresAllVictories: true },
        { name: "Angkor Wat", victory: ["all"], tier: "not worth" },
        { name: "Chichen Itza", victory: ["culture"], tier: "good" },
        { name: "St. Basil's Cathedral", victory: ["religion", "culture"], tier: "good", requiresAllVictories: true },
        { name: "Casa de Contratacion", victory: ["all"], tier: "good" },
        { name: "Forbidden City", victory: ["all"], tier: "best" },
        { name: "Great Zimbabwe", victory: ["all"], tier: "good" },
        { name: "Taj Mahal", victory: ["all"], tier: "good" },
        { name: "Venetian Arsenal", victory: ["domination"], tier: "niche" },
        { name: "Torre de Belem", victory: ["all"], tier: "good" },
        { name: "Potala Palace", victory: ["diplomacy"], tier: "good" },
        { name: "Bolshoi Theatre", victory: ["culture"], tier: "good" },
        { name: "Oxford University", victory: ["science"], tier: "good" },
        { name: "Ruhr Valley", victory: ["domination", "science", "culture"], tier: "good" },
        { name: "Statue of Liberty", victory: ["diplomacy"], tier: "good" },
        { name: "Hermitage", victory: ["culture"], tier: "good" },
        { name: "Orszaghaz", victory: ["diplomacy"], tier: "good" },
        { name: "Panama Canal", victory: ["all"], tier: "niche" },
        { name: "Big Ben", victory: ["all"], tier: "good" },
        { name: "Eiffel Tower", victory: ["culture"], tier: "good" },
        { name: "Golden Gate Bridge", victory: ["culture"], tier: "niche" },
        { name: "Broadway", victory: ["culture"], tier: "good" },
        { name: "Cristo Redentor", victory: ["culture", "religion"], tier: "good", requiresAllVictories: true },
        { name: "Biosphere", victory: ["culture"], tier: "good" },
        { name: "Sydney Opera House", victory: ["culture"], tier: "good" },
        { name: "Estadio de Maracana", victory: ["all"], tier: "good" },
        { name: "Amundsen-Scott Research Station", victory: ["science"], tier: "good" }
    ];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateWonders);
    });

    // Initial rendering on page load
    preloadImages();

    function preloadImages() {
        wonders.forEach(wonder => {
            const img = new Image();
            img.onload = function () {
                // Once the image is loaded, render the wonders
                updateWonders();
            };
            img.src = `C:/Users/natha/OneDrive/Desktop/Capstone Project/Images/World Wonder Images/${wonder.name}.webp`;
        });
    }

    function updateWonders() {
        const selectedVictories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id.replace("Checkbox", ""));

        renderWonders(selectedVictories);
    }


    function renderWonders(selectedVictories) {
        wondersList.innerHTML = "";

        // Define the custom tier order
        const tierOrder = { "best": 1, "good": 2, "niche": 3, "not worth": 4 };

        // Sort wonders based on the custom tier order
        wonders.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

        let currentTierContainer; // Variable to keep track of the current tier container

        wonders.forEach((wonder, index) => {
            // Display tier explanation at the beginning of each tier
            if (index === 0 || wonder.tier !== wonders[index - 1].tier) {
                // Create a new container for the current tier
                currentTierContainer = document.createElement("div");
                currentTierContainer.classList.add("tier-container");

                // Display tier explanation at the beginning of each tier
                const tierExplanation = document.createElement("div");
                tierExplanation.textContent = tierExplanations[wonder.tier];
                currentTierContainer.appendChild(tierExplanation);

                wondersList.appendChild(currentTierContainer);
            }

            // Create container for wonder and tooltip
            const wonderContainer = document.createElement("div");
            wonderContainer.classList.add("wonder-container");


            // Create image element and set its attributes
            const wonderImage = new Image();
            wonderImage.src = `C:/Users/natha/OneDrive/Desktop/Capstone Project/Images/World Wonder Images/${wonder.name}.webp`;
            wonderImage.alt = wonder.name;

            // Check if all of the selected victories match the wonder's victories
            const allVictoriesMatch = wonder.requiresAllVictories
                ? wonder.victory.every(victory => selectedVictories.includes(victory))
                : selectedVictories.some(victory => wonder.victory.includes(victory));

            // Check if the wonder is good for any victory type
            const isVersatile = wonder.victory.includes("all");

            // Check if at least one selected victory matches any of the wonder's victory conditions
            const victoryMatch = isVersatile || allVictoriesMatch;

            if (victoryMatch) {
                wonderImage.classList.add("lit-up");
            } else {
                wonderImage.classList.add("dimmed");
            }

            wondersList.appendChild(wonderImage);

            // Create tooltip element
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = wonder.name;

            // Append elements to wonder container
            wonderContainer.appendChild(wonderImage);
            wonderContainer.appendChild(tooltip);

            // Append wonder container to wonders list
            wondersList.appendChild(wonderContainer);

            // Append wonder container to tier container
            currentTierContainer.appendChild(wonderContainer);
        });
    }


});
