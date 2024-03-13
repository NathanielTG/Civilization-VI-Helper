document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const civilizationsList = document.getElementById("civilizationsList");

    const civilizationsData = [
        { name: "America", victories: ["culture", "domination", "diplomacy"] },
        { name: "Arabia", victories: ["religion", "science"] },
        { name: "Australia", victories: ["domination", "science"] },
        { name: "Aztec", victories: ["domination"] },
        { name: "Babylon", victories: ["domination", "science", "culture"] },
        { name: "Brazil", victories: ["domination", "science", "culture", "religion"] },
        { name: "Byzantine", victories: ["domination", "religion"] },
        { name: "Canada", victories: ["culture", "diplomacy"] },
        { name: "China", victories: ["culture", "science"] },
        { name: "Cree", victories: ["diplomacy"] },
        { name: "Egypt", victories: ["culture", "religion", "diplomacy"] },
        { name: "England", victories: ["domination", "culture", "science"] },
        { name: "Ethiopia", victories: ["religion", "culture"] },
        { name: "France", victories: ["domination", "culture"] },
        { name: "Gaul", victories: ["domination"] },
        { name: "Georgia", victories: ["religion", "diplomacy"] },
        { name: "Germany", victories: ["domination", "science", "culture"] },
        { name: "Gran Colombia", victories: ["domination"] },
        { name: "Greece", victories: ["domination", "culture", "diplomacy"] },
        { name: "Hungary", victories: ["domination", "diplomacy"] },
        { name: "Inca", victories: ["science", "religion"] },
        { name: "India", victories: ["religion", "domination"] },
        { name: "Indonesia", victories: ["domination", "science", "culture", "religion"] },
        { name: "Japan", victories: ["domination", "culture", "science", "religion"] },
        { name: "Khmer", victories: ["religion", "culture"] },
        { name: "Kongo", victories: ["culture"] },
        { name: "Korea", victories: ["science"] },
        { name: "Macedon", victories: ["domination", "science"] },
        { name: "Mali", victories: ["religion", "diplomacy"] },
        { name: "Maori", victories: ["religion", "culture"] },
        { name: "Mapuche", victories: ["domination", "culture"] },
        { name: "Maya", victories: ["science"] },
        { name: "Mongolia", victories: ["domination"] },
        { name: "Netherlands", victories: ["science", "culture"] },
        { name: "Norway", victories: ["domination"] },
        { name: "Nubia", victories: ["domination"] },
        { name: "Ottomans", victories: ["domination"] },
        { name: "Persia", victories: ["domination", "culture"] },
        { name: "Phoenicia", victories: ["domination"] },
        { name: "Poland", victories: ["domination", "religion", "culture"] },
        { name: "Portugal", victories: ["science", "diplomacy"] },
        { name: "Rome", victories: ["domination"] },
        { name: "Russia", victories: ["religion", "culture"] },
        { name: "Scotland", victories: ["science"] },
        { name: "Scythia", victories: ["domination"] },
        { name: "Spain", victories: ["domination", "religion", "science"] },
        { name: "Sumeria", victories: ["domination", "science"] },
        { name: "Sweden", victories: ["culture", "diplomacy"] },
        { name: "Vietnam", victories: ["domination", "culture"] },
        { name: "Zulu", victories: ["domination"] }
    ];

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateCivilizations);
    });

    // Initial rendering on page load
    preloadImages();

    function preloadImages() {
        civilizationsData.forEach(civilization => {
            const img = new Image();
            img.onload = function () {
                // Once the image is loaded, render the civilizations
                updateCivilizations();
            };
            img.src = `C:/Users/natha/OneDrive/Desktop/Capstone Project/Images/Civ Images/${civilization.name}.webp`;
        });
    }

    function updateCivilizations() {
        const selectedVictories = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.id.replace("Checkbox", ""));

        renderCivilizations(selectedVictories);
    }

    function renderCivilizations(selectedVictories) {
        civilizationsList.innerHTML = "";
    
        civilizationsData.forEach(civilization => {
            const civilizationElement = document.createElement("div");
            civilizationElement.classList.add("civilization");
    
            // Create container for wonder and tooltip
            const civContainer = document.createElement("div");
            civContainer.classList.add("civ-container");

            // Create image element and set its attributes
            const civilizationImage = new Image();
            civilizationImage.src = `C:/Users/natha/OneDrive/Desktop/Capstone Project/Images/Civ Images/${civilization.name}.webp`;
            civilizationImage.alt = civilization.name;
    
            // Check if the selected victories exactly match the civilization's victories
            const isExactMatch = JSON.stringify(selectedVictories.sort()) === JSON.stringify(civilization.victories.sort());
    
            // Apply the exact-match class if there is an exact match
            if (isExactMatch) {
                civilizationImage.classList.add("exact-match");
            } else {
                const totalVictories = civilization.victories.length;
                const selectedRatio = selectedVictories.filter(victory => civilization.victories.includes(victory)).length / totalVictories;
    
                // Adjust the brightness based on the ratio
                const brightness = 30 + (selectedRatio * 70);
    
                civilizationImage.style.filter = `brightness(${brightness}%)`;
            }
            
            // Create tooltip element
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = civilization.name;

            // Append image element to civilization element
            civilizationElement.appendChild(civilizationImage);
            civilizationElement.appendChild(tooltip);

            civilizationsList.appendChild(civilizationElement);
        });
    }
    
});
