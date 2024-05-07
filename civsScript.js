document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const civilizationsList = document.getElementById("civilizationsList");
    
    const civilizationsData = [
        { name: "America (Bull Moose Teddy)", victories: ["culture", "science", "diplomacy"] },
        { name: "America", victories: ["culture", "domination", "diplomacy"] },
        { name: "Arabia (Vizier Saladin)", victories: ["religion", "science"] },
        { name: "Arabia (Sultar Saladin)", victories: ["religion", "science", "domination"] },
        { name: "Australia", victories: ["domination", "science"] },
        { name: "Aztec", victories: ["domination"] },
        { name: "Babylon", victories: ["domination", "science", "culture"] },
        { name: "Brazil", victories: ["domination", "science", "culture", "religion"] },
        { name: "Byzantine", victories: ["domination", "religion"] },
        { name: "Canada", victories: ["culture", "diplomacy"] },
        { name: "China", victories: ["culture", "science"] },
        { name: "China (Unifier)", victories: ["culture", "science", "domination"] },
        { name: "Cree", victories: ["diplomacy"] },
        { name: "Egypt (Cleopatra)", victories: ["culture", "diplomacy"] },
        { name: "Egypt", victories: ["culture"] },
        { name: "England", victories: ["domination", "culture", "science"] },
        { name: "England (Elizabeth I)", victories: ["domination", "culture", "science", "diplomacy"] },
        { name: "Ethiopia", victories: ["religion", "culture"] },
        { name: "France", victories: ["domination", "culture"] },
        { name: "France (Magnificence)", victories: ["culture"] },
        { name: "Gaul", victories: ["domination"] },
        { name: "Georgia", victories: ["religion", "diplomacy", "domination"] },
        { name: "Germany (Frederick Barbarossa)", victories: ["domination", "science", "culture"] },
        { name: "Germany (Ludwig II)", victories: ["science", "culture"] },
        { name: "Gran Colombia", victories: ["domination"] },
        { name: "Greece (Pericles)", victories: ["culture", "diplomacy"] },
        { name: "Greece (Gorgo)", victories: ["domination", "culture"] },
        { name: "Hungary", victories: ["domination", "diplomacy"] },
        { name: "Inca", victories: ["science", "culture", "religion"] },
        { name: "India (Gandhi)", victories: ["religion"] },
        { name: "India (Chandragupta)", victories: ["religion", "domination"] },
        { name: "Indonesia", victories: ["domination", "science", "culture", "religion"] },
        { name: "Japan (Hojo Tokimune)", victories: ["domination", "culture", "science", "religion"] },
        { name: "Japan (Tokugawa)", victories: ["culture", "science", "diplomacy"] },
        { name: "Khmer", victories: ["religion", "culture"] },
        { name: "Kongo", victories: ["culture"] },
        { name: "Korea", victories: ["science"] },
        { name: "Macedon", victories: ["domination", "science"] },
        { name: "Mali (Mansa Musa)", victories: ["religion", "diplomacy"] },
        { name: "Mali (Sundiata Keita)", victories: ["religion", "diplomacy", "culture"] },
        { name: "Maori", victories: ["religion", "culture"] },
        { name: "Mapuche", victories: ["domination", "culture"] },
        { name: "Maya", victories: ["science"] },
        { name: "Mongolia (Genghis Khan)", victories: ["domination"] },
        { name: "Mongolia (Kublai Khan)", victories: ["domination", "culture", "science"] },
        { name: "Netherlands", victories: ["science", "culture"] },
        { name: "Norway (Konge)", victories: ["domination", "religion"] },
        { name: "Norway (Varangian)", victories: ["domination", "religion", "diplomacy"] },
        { name: "Nubia", victories: ["domination", "religion"] },
        { name: "Ottomans (Kanuni)", victories: ["domination"] },
        { name: "Ottomans (Muhtesem)", victories: ["domination", "science"] },
        { name: "Persia", victories: ["domination", "culture", "religion"] },
        { name: "Phoenicia", victories: ["domination"] },
        { name: "Poland", victories: ["religion", "culture", "domination"] },
        { name: "Portugal", victories: ["science", "diplomacy"] },
        { name: "Rome", victories: ["domination"] },
        { name: "Russia", victories: ["religion", "culture"] },
        { name: "Scotland", victories: ["science"] },
        { name: "Scythia", victories: ["domination"] },
        { name: "Spain", victories: ["domination", "religion", "science"] },
        { name: "Sumeria", victories: ["domination", "science", "diplomacy"] },
        { name: "Sweden", victories: ["culture", "diplomacy", "science"] },
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
            img.src = `Images/Civ Images/${civilization.name}.webp`;
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
        
        const baseSize = 50; // Base size of the image
        const baseBrightness = 30; // Base brightness
        const sizeIncrement = 10; // Size increment for each matching victory
        const brightnessIncrement = 30; // Brightness increment for each matching victory
        
        civilizationsData.forEach(civilization => {
            const civilizationElement = document.createElement("div");
            civilizationElement.classList.add("civilization");
            
            // Create an image element and set its attributes
            const civilizationImage = new Image();
            civilizationImage.src = `Images/Civ Images/${civilization.name}.webp`;
            civilizationImage.alt = civilization.name;
            
            // Check for an exact match between the selected victories and the civilization's victories
            const isExactMatch = selectedVictories.length === civilization.victories.length &&
            selectedVictories.every(victory => civilization.victories.includes(victory));
            
            // Count the number of matching victories
            const matchingVictoriesCount = civilization.victories.filter(victory => selectedVictories.includes(victory)).length;
            
            if (isExactMatch) {
                // Set the brightness to the maximum if there is an exact match
                civilizationImage.style.filter = 'brightness(130%)';
                civilizationImage.classList.add("exact-match");
            } else {
                // Adjust the size and brightness incrementally based on the number of matching victories
                const newBrightness = baseBrightness + (brightnessIncrement * matchingVictoriesCount);
                // Apply the scale transformation based on the calculated size increment
                const scale = 1 + (matchingVictoriesCount * sizeIncrement / baseSize);
                civilizationImage.style.transform = `scale(${scale})`;
                
                // Apply the calculated brightness
                civilizationImage.style.filter = `brightness(${newBrightness}%)`;
            }
            
            // Create a tooltip element
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = civilization.name;
            
            // Append the image and tooltip to the civilization element
            civilizationElement.appendChild(civilizationImage);
            civilizationElement.appendChild(tooltip);
            
            // Append the civilization element to the list
            civilizationsList.appendChild(civilizationElement);
        });
    }
    
});
