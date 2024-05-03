document.addEventListener("DOMContentLoaded", function () {
    // Define tier explanations outside the function
    const tierExplanations = {
        "best": "The wonders in this tier are among the best in the game and you should aim to build these in every single one of your games. These wonders offer bonuses that are universally strong or good, regardless of the victory condition that you are aiming for.",
        "good": "The wonders in this tier are generally worth building. However, a lot of wonders in this tier are either geared towards specific victory conditions, or require specific scenarios in which the wonder will give useful benefits.",
        "niche": "The wonders in this tier are generally not very good or strong. However, they can serve a purpose or provide benefits in very specific or niche conditions.",
        "not worth": "The wonders in this tier should avoid being built, unless you have nothing else to build. These wonders offer very little for the amount of production that it costs to build them."
    };
    
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const wondersList = document.getElementById("wondersList");
    const descriptionContainer = document.getElementById("descriptionContainer"); // The container for descriptions
    
    // Mapping of victory conditions to images
    const victoryConditionsMap = {
        "domination": {
            src: "Images/Victory Type Images/Domination_Victory_29.webp",
            alt: "Domination"
        },
        "science": {
            src: "Images/Victory Type Images/Science_Victory_29.webp",
            alt: "Science"
        },
        "culture": {
            src: "Images/Victory Type Images/Culture_Victory_29.webp",
            alt: "Culture"
        },
        "religion": {
            src: "Images/Victory Type Images/Religious_Victory_29.webp",
            alt: "Religion"
        },
        "diplomacy": {
            src: "Images/Victory Type Images/Diplomatic_Victory_29.webp",
            alt: "Diplomacy"
        },
        "all": {
            src: "", // No image needed for "ALL"
            alt: "ALL"
        }
    };
    
    //List of all wonders
    const wonders = [
        { name: "Great Bath", victory: ["all"], tier: "good", description: "+3 {housing_icon} Housing and +1 {amenities_icon} Amenity from entertainment. <br> <br> Floodplains tiles along the river containing this wonder are now immune to Flood damage. -50% {production_icon} Production and {food_icon} Food yields from Flood damage. <br> <br> +1 {faith_icon} Faith to the yields of a tile belonging to this city for every time it has been Flooded. <br> <br> Must be built on Floodplains." },
        { name: "Hanging Gardens", victory: ["all"], tier: "not worth", description: "Increases growth by 15% in all cities. +2 {housing_icon} Housing. <br><br> Must be built along a River."},
        { name: "Stonehenge", victory: ["religion"], tier: "good", description: "+2 {faith_icon} Faith.<br><br> Grants a free {prophet_icon} Great Prophet.<br><br> {prophet_icon} Great Prophets may found a religion on Stonehenge instead of a Holy Site. <br><br> Must be built on flat land adjacent to {stone_icon} Stone." },
        { name: "Temple of Artemis", victory: ["all"], tier: "best", description: "+4 {food_icon} Food and +3 {housing_icon} Housing. <br><br> Each Camp, Pasture, and Plantation within 4 tiles provides +1 {amenities_icon} Amenity.<br><br>Must be built next to a Camp." },
        { name: "Etemenanki", victory: ["science"], tier: "good", description: "+2 {science_icon} Science and +1 {production_icon} Production to all Marsh tiles in your empire. <br><br>+1 {science_icon} Science and +1 {production_icon} on all Floodplains tiles in the city.<br><br>+2 {science_icon} Science. <br><br>Must be built on Floodplains or Marsh." },
        { name: "Oracle", victory: ["all"], tier: "good", description: "+1 {culture_icon} Culture and +1 {faith_icon} Faith. <br><br>Patronage of Great People costs 25% less {faith_icon} Faith.<br><br>Districts in this city provide +2 Great Person points of their type.<br><br>Must be built on Hills." },
        { name: "Pyramids", victory: ["all"], tier: "good", description: "+2 {culture_icon} Culture.<br><br>Grants a free Builder.<br><br>All Builders earn one extra build charge.<br><br>Must be built on Desert (including Floodplains) without Hills." },
        { name: "Apadana", victory: ["culture", "diplomacy"], tier: "good", description: "+2 Great Work Slots. <br><br>+2 {envoy_icon} Envoys when you build a wonder, including Apadana, in this city.<br><br>Must be build adjacent to a {capital_icon} Capital." },
        { name: "Colosseum", victory: ["all"], tier: "best", description: "+2 {culture_icon} Culture, +2 {amenities_icon} Amenities, and +2 Loyalty to each City Center within 6 tiles.<br><br>Must be built on flat land adjacent to an Entertainment Complex district with an Arena." },
        { name: "Great Lighthouse", victory: ["domination"], tier: "niche", description: "+3 {gold_icon} Gold. <br><br>+1 {admiral_icon} Great Admiral point per turn.<br><br>+1 {movement_icon} for all naval units.<br><br>Must be built on the Coast and adjacent to a Harbor district with a Lighthouse." },
        { name: "Jebel Barkal", victory: ["domination", "culture", "religion"], tier: "good", requiresAllVictories: true, description: "Awards 6 {iron_icon} Iron per turn.<br><br>Provides +4 {faith_icon} Faith to your cities that are within 6 tiles.<br><br>Must be built on Desert Hils." },
        { name: "Mahabodhi Temple", victory: ["religion", "diplomacy"], tier: "good", requiresAllVictories: true, description: "+4 {faith_icon} Faith.<br><br>Grants 2 Apostles.<br><br>+2 Diplomatic Victory Points when built.<br><br>Must be built on Woods adjacent to a Holy Site district with a Temple, and player must have founded a religion." },
        { name: "Statue of Zeus", victory: ["domination"], tier: "good", description: "+3 {gold_icon} Gold.<br><br>Grants 3 Spearman, 3 Archers, and a Battering Ram.<br><br>+50% {production_icon} Production towards anti-cavalry units across your civilization.<br><br>Must be built on flat land adjacent to an Encampment with a Barracks." },
        { name: "Great Library", victory: ["culture", "science"], tier: "good", description: "+2 {science_icon} Science.<br><br>+1 {scientist_icon} Great Scientist and +1 {writer_icon} Great Writer point per turn.<br><br>+2 {writing_icon} Great Works of Writing slots.<br><br>Receives boost to all Ancient and Classical era technologies.<br><br>Receives a random tech boost after another player recruits a Great Scientist.<br><br>Must be built on flat land adjacent to a Campus with a Library." },
        { name: "Mausoleum at Halicarnassus", victory: ["science", "culture"], tier: "good", description: "+1 {science_icon} Science, +1 {faith_icon} Faith, and +1 {culture_icon} Culture on all Coast tiles in this city.<br><br>All {engineer_icon} Great Engineers have an additional charge.<br><br>Must be built on a coastal tiel adjacent to a Harbor district." },
        { name: "Colossus", victory: ["all"], tier: "good", description: "+3 {gold_icon} Gold.<br><br>+1 {admiral_icon} Great Admiral point per turn.<br><br>+1 {trade_icon} Trade Route capacity.<br><br>Grants a Trader unit.<br><br>Must be built on Coast and adjacent to a Harbor district." },
        { name: "Machu Picchu", victory: ["science", "culture", "diplomacy"], tier: "good", description: "+4 {gold_icon} Gold.<br><br>Mountain tiles provide a standard adjacency bonus to Commercial Hub, Theater Square, and Industrial Zone districts in all cities.<br><br>Must be built on a Mountain tile that does not contain a volcano." },
        { name: "Petra", victory: ["all"], tier: "good", description: "+2 {food_icon} Food, +2 {gold_icon} Gold, and +1 {production_icon} Production on all Desert tiles for this city (non-Floodplains).<br><br>Must be built on Desert or Floodplains without Hills." },
        { name: "Terracotta Army", victory: ["domination", "culture"], tier: "good", requiresAllVictories: true, description: "+2 {general_icon} Great General points per turn.<br><br>All current land units gain a {promotion_icon} Promotion level.<br><br>All Archaeologists from the owner may enter foreign lands without Open Borders.<br><br>Must be built on flat Grassland or Plains adjacent to an Encampment district with a Barracks or Stable." },
        { name: "Hagia Sophia", victory: ["religion"], tier: "good", description: "+4 {faith_icon} Faith.<br><br>Missionaries and Apostles can spread religion 1 extra time.<br><br>Must be built on flat land adjacent to a Holy Site district, and player must have founded a religion." },
        { name: "Huey Teocalli", victory: ["all"], tier: "good", description: "+1 {amenities_icon} Amenity from Entertainment for each adjacent lake tile.<br><br>+1 {food_icon} Food and +1 {production_icon} Production for each Lake tile in your empire.<br><br>Must be built on a Lake tile adjacent to land." },
        { name: "Kilwa Kisiwani", victory: ["all"], tier: "best", description: "+3 {envoy_icon} Envoys when built.<br><br>When you are the Suzerain of a City-state this city gains a +15% boost to the yield provided by that City-state.<br><br>If you are the Suzerain of 2 or more City-states of that type an additional 15% boost is given to all your cities.<br><br>Must be built on a flat tile adjacent to a Coast." },
        { name: "Meenakshi Temple", victory: ["religion"], tier: "niche", description: "+3 {faith_icon} Faith.<br><br>Grants 2 Gurus.<br><br>Gurus are 30% cheaper to purchase.<br><br>Religious units adjacent to Gurus gain +5 {religion_icon} Religious Strength in Theological Combat and +1 {movement_icon} Movement.<br><br>Must be built adjacent to a Holy Site district, and player must have founded a religion." },
        { name: "Kotoku-in", victory: ["religion", "domination"], tier: "not worth", requiresAllVictories: true, description: "+20% {faith_icon} Faith in this city.<br><br>Grants 4 Warrior Monks.<br><br>Must be built adjacent to a Holy Site with a Temple." },
        { name: "Mont St. Michel", victory: ["culture", "religion"], tier: "good", requiresAllVictories: true, description: "+2 {faith_icon} Faith.<br><br>+2 {relic_icon} Relic slots.<br><br>All Apostles you create gain the Martyr ability in addition to a second ability you choose normally.<br><br>Must be built on Floodplains or Marsh." },
        { name: "Alhambra", victory: ["domination"], tier: "good", description: "+2 {amenities_icon} Amenities.<br><br>+1 {general_icon} Great General point per turn.<br><br>+1 {military_policy_icon} Military policy slot.<br><br>Provides the same defensive bonuses as the Fort improvement.<br><br>Must be built on Hills adjacent to an Encampment district." },
        { name: "University of Sankore", victory: ["science", "religion"], tier: "good", requiresAllVictories: true, description: "+3 {science_icon} Science, +1 {faith_icon} Faith, and +2 {scientist_icon} Great Scientist points per turn.<br><br>+2 {science_icon} Science for every {trade_icon} Trade Route to this city.<br><br>Domestic {trade_icon} Trade Routes grant an additional +1 {faith_icon} Faith to this city.<br><br>Other Civilizations' {trade_icon} Trade Routes to this city grant them +1 {science_icon} Science and +1 {gold_icon} Gold.<br><br>Must be built on a Desert or Desert Hill adjacent to a Campus with a University." },
        { name: "Angkor Wat", victory: ["all"], tier: "not worth", description: "+2 {faith_icon} Faith.<br><br>+1 {citizen_icon} Population in all current cities when built.<br><br>+1 {housing_icon} Housing in all cities.<br><br>Must be built adjacent to an Aqueduct district." },
        { name: "Chichen Itza", victory: ["culture"], tier: "good", description: "+2 {culture_icon} Culture and +1 {production_icon} Production to all Rainforest tiles for thie city.<br><br>Must be built on Rainforest." },
        { name: "St. Basil's Cathedral", victory: ["religion", "culture"], tier: "good", requiresAllVictories: true, description: "+3 {relic_icon} Relic slots.<br><br>+100% {tourism_icon} Religious Tourism from this city.<br><br>+1 {food_icon} Food, +1 {production_icon} Production and +1 {culture_icon} Culture from all Tundra tiles for this city.<br><br>Must be built adjacent to a City Center." },
        { name: "Casa de Contratacion", victory: ["all"], tier: "good", description: "+3 {merchant_icon} Great Merchant points per turn.<br><br>Gain 3 Governor promotions.<br><br>All your cities on your non-home continent with a Governor gain +15% {production_icon} Production, +15% {faith_icon} Faith, and +15% {gold_icon} Gold.<br><br>Must be built adjacent to a Government Plaza." },
        { name: "Forbidden City", victory: ["all"], tier: "best", description: "+5 {culture_icon} Culture.<br><br>+1 {wildcard_icon} Wildcard policy slot.<br><br>Must be built on flat land adjacent to City Center." },
        { name: "Great Zimbabwe", victory: ["all"], tier: "good", description: "+5 {gold_icon} Gold and +2 {merchant_icon} Great Merchant points per turn.<br><br>+1 {trade_icon} Trade Route capacity. Your {trade_icon} Trade Routes from this city get +2 {gold_icon} Gold for every Bonus resource in this city's territory.<br><br>Must be built adjacent to {cattle_icon} Cattle and a Commercial Hub district with a Market." },
        { name: "Taj Mahal", victory: ["all"], tier: "good", description: "+1 Era Score from Historic Moment earned after the wonder is complete if that Moment is usually worth 2 or more Era Score.<br><br>Must be built next to a River." },
        { name: "Venetian Arsenal", victory: ["domination"], tier: "niche", description: "+2 {engineer_icon} Great Engineer points per turn.<br><br>Receive a second naval unit each time you train a naval unit.<br><br>Must be built on the Coast and adjacent to an Industrial Zone district." },
        { name: "Torre de Belem", victory: ["all"], tier: "good", description: "International {trade_icon} Trade Routes from thsi city receive +2 {gold_icon} Gold for every Luxury Resource at the destination.<br><br>When Torre de Belem is constructed, cities not on your home continent receive the lowest {production_icon} Production cost building they can currently construct.<br><br>+5 {gold_icon} Gold and +1 {admiral_icon} Great Admiral point per turn.<br><br>Must be built on Coast adjacent to land and a Harbor. Cannot be built on a Lake." },
        { name: "Potala Palace", victory: ["diplomacy"], tier: "good", description: "+2 {culture_icon} Culture and +3 {faith_icon} Faith.<br><br>+1 {diplomacy_policy_icon} Diplomatic policy slot.<br><br>+1 Diplomatic Victory Point when built.<br><br>Must be built on a Hill adjacent to a Mountain." },
        { name: "Bolshoi Theatre", victory: ["culture"], tier: "good", description: "+2 {writer_icon} Great Writer and +2 {musician_icon} Great Musician points per turn.<br><br>+1 {writing_icon} Great Work of Writing and +1 {music_icon} Great Work of Music slot.<br><br>Awards 2 randomly-chosen free civics when completed.<br><br>Must be built on flat land adjacent to a Theater Square district." },
        { name: "Oxford University", victory: ["science"], tier: "good", description: "+3 {scientist_icon} Great Scientist points per turn.<br><br>+2 {writing_icon} Great Works of Writing slots.<br><br>+20% {science_icon} Science in the city, and awards 2 randomly chosen free technologies when completed.<br><br>Must be built on flat Grasslands or Plains adjacent to a Campus district with a University." },
        { name: "Ruhr Valley", victory: ["domination", "science", "culture", "diplomacy"], tier: "good", description: "+20% {production_icon} Production in this city, and +1 {production_icon} Production for each Mine and Quarry in this city.<br><br>Must be built along a River adjacent to an Industrial Zone district with a Factory." },
        { name: "Statue of Liberty", victory: ["diplomacy"], tier: "good", description: "+4 Diplomatic Victory points when built.<br><br>All your cities within 6 tiles are 100% Loyal.<br><br>Must be built on a Coast adjacent to land and a Harbor." },
        { name: "Hermitage", victory: ["culture"], tier: "good", description: "+3 {artist_icon} Great Artist points per turn.<br><br>+4 {art_icon} Great Works of Art slots.<br><br>Must be built next to a River on a non-Desert and non-Tundra tile." },
        { name: "Orszaghaz", victory: ["diplomacy"], tier: "good", description: "+4 {culture_icon} Culture.<br><br>+100% {favor_icon} Diplomatic Favor per turn from starting a turn as a Suzerain of a city-state.<br><br>Must be built on a River." },
        { name: "Panama Canal", victory: ["all"], tier: "niche", description: "Upon completion 1 or 2 adjacent Canal districts are automatically constructed.<br><br>The Canal wonder tile can now be crossed by naval units.<br><br>+10 {gold_icon} Gold.<br><br>Must be built on a flat land tile where there are two adjacent tiles directly across the build tile from one another the meets the following criteria: one adjacent tile must be able to legally hold a Canal district connecting into the Panama Canal construction tile; the other must be either a city, a water tile, or be another tile that can hold a connecting Canal." },
        { name: "Big Ben", victory: ["all"], tier: "good", description: "+6 {gold_icon} Gold and +3 {merchant_icon} Great Merchant points per turn.<br><br>+1 {economic_policy_icon} Economic policy slot.<br><br>Upon construction the treasury is increased by 50%.<br><br>Must be built next to a River adjacent to a Commercial Hub district with a Bank." },
        { name: "Eiffel Tower", victory: ["culture"], tier: "good", description: "All tiles in your civilization gain +2 Appeal.<br><br>Must be built on flat land adjacent to City Center." },
        { name: "Golden Gate Bridge", victory: ["culture"], tier: "niche", description: "+3 {amenities_icon} Amenities from entertainment.<br><br>+4 Appeal to all tiles in this city.<br><br>+100% {tourism_icon} Tourism from improvements and National Parks in this city.<br><br>Acts as a Modern Road and creates Modern Roads in land tiles on either end if not present.<br><br>Land units can cross without needing to disembark.<br><br>Must be built on a Coast tile. The bridge must run straight across the hex between two land tiles directly opposite one another. At least one water tile must be present on both the left and right sides of the bridge." },
        { name: "Broadway", victory: ["culture"], tier: "good", description: "+3 {writer_icon} Great Writer and +3 {musician_icon} Great Musician points per turn.<br><br>+1 {writing_icon} Great Work of Writing and +2 {music_icon} Great Work of Music slots.<br><br>+20% {culture_icon} Culture in this city.<br><br>Gain a free random Atomic Era civic boost.<br><br>Must be built on flat land next to a Theater Square district." },
        { name: "Cristo Redentor", victory: ["culture", "religion"], tier: "good", requiresAllVictories: true, description: "+4 {culture_icon} Culture.<br><br>{tourism_icon} Tourism output from {relic_icon} Relics and Holy Cities is not diminished by other civilizations who have researched The Enlightenment civic.<br><br>Double {tourism_icon} Tourism output of Seaside Resorts across your civilization.<br><br>Must be built on Hills." },
        { name: "Biosphere", victory: ["culture"], tier: "good", description: "+1 Appeal to tiles adjacent to Rainforest and Marsh in your empire.<br><br>+200% {power_icon} Power for all Offshore Wind Farms, Solar Farms, Wind Farms, Geothermal Plants, and Hydroelectric Dams. This building and these improvements provide {tourism_icon} Tourism equal to their {power_icon} Power.<br><br>Must be built next to a River adjacent to a Neighborhood." },
        { name: "Sydney Opera House", victory: ["culture"], tier: "good", description: "+8 {culture_icon} Culture.<br><br>+5 {musician_icon} Great Musician points per turn.<br><br>+3 {music_icon} Great Works of Music slots.<br><br>Must be built on Coast adjacent to a Harbor. Cannot be built on a Lake." },
        { name: "Estadio de Maracana", victory: ["all"], tier: "good", description: "+6 {culture_icon} Culture and +2 {amenities_icon} Amenities in each city of your civilization.<br><br>Must be built on flat land adjacent to an Entertainment Complex with a Stadium." },
        { name: "Amundsen-Scott Research Station", victory: ["science"], tier: "good", description: "+5 {scientist_icon} Great Scientist points per turn.<br><br>+20% {science_icon} and +10% {production_icon} Production in all cities. Yields are doubled if there are 5 Snow or Snow Hill tiles within 3 tiles of a city owned by this player.<br><br>Must be built on a Snow or a Snow Hills tile next to Campus with a Research Lab." }
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
            img.src = `Images/World Wonder Images/${wonder.name}.webp`;
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
        
        // Iterate through the wonders and set up the event listeners
        wonders.forEach((wonder, index) => {
            // Display tier explanation at the beginning of each tier
            if (index === 0 || wonder.tier !== wonders[index - 1].tier) {
                // Create a new tier container
                const currentTierContainer = document.createElement('div');
                currentTierContainer.classList.add('tier-container');
                
                // Add the appropriate class based on the wonder's tier
                if (wonder.tier === "best") {
                    currentTierContainer.classList.add("best-tier");
                } else if (wonder.tier === "good") {
                    currentTierContainer.classList.add("good-tier");
                } else if (wonder.tier === "niche") {
                    currentTierContainer.classList.add("niche-tier");
                } else if (wonder.tier === "not worth") {
                    currentTierContainer.classList.add("not-worth-tier");
                }
                
                // Create a flex container to house the icon and wonders
                const tierRowContainer = document.createElement('div');
                tierRowContainer.classList.add('tier-row-container');
                
                // Create a container for the info icon
                const iconContainer = document.createElement('div');
                iconContainer.classList.add('icon-container');
                
                // Create the info icon image element
                const infoIcon = document.createElement('img');
                infoIcon.classList.add('info-icon');
                infoIcon.src = 'Images/info.png'; // Specify the path to your image
                infoIcon.alt = 'Information icon';
                
                // Create the tooltip span element
                const tooltip = document.createElement('span');
                tooltip.classList.add('tooltip');
                tooltip.textContent = tierExplanations[wonder.tier]; // Set tooltip content
                
                // Variables to track hover state and hide timeout
                let isHoveringOverIcon = false;
                let isHoveringOverTooltip = false;
                let hideTimeout;
                
                // Function to show the tooltip
                const showTooltip = () => {
                    clearTimeout(hideTimeout);
                    tooltip.style.opacity = '1';
                };
                
                // Function to hide the tooltip with a slight delay
                const hideTooltip = () => {
                    hideTimeout = setTimeout(() => {
                        if (!isHoveringOverIcon && !isHoveringOverTooltip) {
                            tooltip.style.opacity = '0';
                        }
                    }, 300); // Adjust the delay as needed
                };
                
                // Add event listeners to the info icon
                infoIcon.addEventListener('mouseenter', () => {
                    isHoveringOverIcon = true;
                    showTooltip();
                });
                infoIcon.addEventListener('mouseleave', () => {
                    isHoveringOverIcon = false;
                    hideTooltip();
                });
                
                // Add event listeners to the tooltip
                tooltip.addEventListener('mouseenter', () => {
                    isHoveringOverTooltip = true;
                    showTooltip();
                });
                tooltip.addEventListener('mouseleave', () => {
                    isHoveringOverTooltip = false;
                    hideTooltip();
                });
                
                // Append the icon and tooltip to the icon container
                iconContainer.appendChild(infoIcon);
                iconContainer.appendChild(tooltip);
                
                // Append the icon container to the tier row container
                tierRowContainer.appendChild(iconContainer);
                
                // Create a wonders container and add it to the tier row container
                const wondersContainer = document.createElement('div');
                wondersContainer.classList.add('wonders-container');
                
                // Append the wonders container to the tier row container
                tierRowContainer.appendChild(wondersContainer);
                
                // Append the tier row container to the tier container
                currentTierContainer.appendChild(tierRowContainer);
                
                // Append the tier container to the wonders list
                wondersList.appendChild(currentTierContainer);
            }
            // Ensure that wondersContainer is within scope of the current iteration
            const currentTierContainer = wondersList.querySelectorAll('.tier-container')[wondersList.querySelectorAll('.tier-container').length - 1];
            const wondersContainer = currentTierContainer.querySelector(".wonders-container");
            
            // Create container for the wonder image
            const wonderContainer = document.createElement("div");
            wonderContainer.classList.add("wonder-container");
            
            // Create an image element for the wonder image
            const wonderImage = new Image();
            wonderImage.src = `Images/World Wonder Images/${wonder.name}.webp`;
            wonderImage.alt = wonder.name;
            
            // Determine if the wonder matches the selected victory conditions
            const allVictoriesMatch = wonder.requiresAllVictories
            ? wonder.victory.every(victory => selectedVictories.includes(victory))
            : selectedVictories.some(victory => wonder.victory.includes(victory));
            
            const isVersatile = wonder.victory.includes("all");
            
            // Check if the wonder matches any of the selected victory conditions
            const victoryMatch = isVersatile || allVictoriesMatch;
            
            // Apply the appropriate class based on the match result
            if (victoryMatch) {
                wonderImage.classList.add("lit-up");
                wonderImage.classList.remove("dimmed");
            } else {
                wonderImage.classList.add("dimmed");
                wonderImage.classList.remove("lit-up");
            }
            
            // Append the image to the container
            wonderContainer.appendChild(wonderImage);
            // Append the wonder container to the wonders container
            wondersContainer.appendChild(wonderContainer);
            
            // Add click event listener to display the wonder description
            wonderImage.addEventListener("click", function () {
                // Clear the description container
                descriptionContainer.innerHTML = "";
                
                // Create an image element for the clicked wonder
                const wonderImageElement = document.createElement("img");
                wonderImageElement.src = `Images/World Wonder Images/${wonder.name}.webp`;
                wonderImageElement.alt = wonder.name;
                wonderImageElement.style.width = '100px'; // Adjust width as needed
                
                // Create a heading element for the wonder name
                const wonderNameElement = document.createElement("h2");
                wonderNameElement.textContent = wonder.name;
                
                // Append the wonder image and name to the description container
                descriptionContainer.appendChild(wonderImageElement);
                descriptionContainer.appendChild(wonderNameElement);
                
                // Generate the description with icons
                let descriptionWithIcons = wonder.description
                .replace(/{housing_icon}/g, "<img src='Images/Icon Images/Housing.webp' alt='Housing icon' style='width:16px;height:16px;'>")
                .replace(/{production_icon}/g, "<img src='Images/Icon Images/Production.webp' alt='Production icon' style='width:16px;height:16px;'>")
                .replace(/{amenities_icon}/g, "<img src='Images/Icon Images/Amenities.webp' alt='Amenities icon' style='width:16px;height:16px;'>")
                .replace(/{food_icon}/g, "<img src='Images/Icon Images/Food.webp' alt='Food icon' style='width:16px;height:16px;'>")
                .replace(/{prophet_icon}/g, "<img src='Images/Icon Images/Prophet.webp' alt='Prophet icon' style='width:16px;height:16px;'>")
                .replace(/{stone_icon}/g, "<img src='Images/Icon Images/Stone.webp' alt='Stone icon' style='width:16px;height:16px;'>")
                .replace(/{cattle_icon}/g, "<img src='Images/Icon Images/Cattle.webp' alt='Cattle icon' style='width:16px;height:16px;'>")
                .replace(/{science_icon}/g, "<img src='Images/Icon Images/Science.webp' alt='Science icon' style='width:16px;height:16px;'>")
                .replace(/{culture_icon}/g, "<img src='Images/Icon Images/Culture.webp' alt='Culture icon' style='width:16px;height:16px;'>")
                .replace(/{envoy_icon}/g, "<img src='Images/Icon Images/Envoy.webp' alt='Envoy icon' style='width:16px;height:16px;'>")
                .replace(/{capital_icon}/g, "<img src='Images/Icon Images/Capital.webp' alt='Capital icon' style='width:16px;height:16px;'>")
                .replace(/{admiral_icon}/g, "<img src='Images/Icon Images/Admiral.webp' alt='Admiral icon' style='width:16px;height:16px;'>")
                .replace(/{movement_icon}/g, "<img src='Images/Icon Images/Movement.webp' alt='Movement icon' style='width:16px;height:16px;'>")
                .replace(/{gold_icon}/g, "<img src='Images/Icon Images/Gold.webp' alt='Gold icon' style='width:16px;height:16px;'>")
                .replace(/{iron_icon}/g, "<img src='Images/Icon Images/Iron.webp' alt='Iron icon' style='width:16px;height:16px;'>")
                .replace(/{scientist_icon}/g, "<img src='Images/Icon Images/Scientist.webp' alt='Scientist icon' style='width:16px;height:16px;'>")
                .replace(/{writing_icon}/g, "<img src='Images/Icon Images/Writing.webp' alt='Writing icon' style='width:16px;height:16px;'>")
                .replace(/{writer_icon}/g, "<img src='Images/Icon Images/Writer.webp' alt='Writer icon' style='width:16px;height:16px;'>")
                .replace(/{musician_icon}/g, "<img src='Images/Icon Images/Musician.webp' alt='Musician icon' style='width:16px;height:16px;'>")
                .replace(/{music_icon}/g, "<img src='Images/Icon Images/Music.webp' alt='Music icon' style='width:16px;height:16px;'>")
                .replace(/{engineer_icon}/g, "<img src='Images/Icon Images/Engineer.webp' alt='Engineer icon' style='width:16px;height:16px;'>")
                .replace(/{trade_icon}/g, "<img src='Images/Icon Images/Trade.webp' alt='Trade icon' style='width:16px;height:16px;'>")
                .replace(/{general_icon}/g, "<img src='Images/Icon Images/General.webp' alt='General icon' style='width:16px;height:16px;'>")
                .replace(/{promotion_icon}/g, "<img src='Images/Icon Images/Promotion.webp' alt='Promotion icon' style='width:16px;height:16px;'>")
                .replace(/{religion_icon}/g, "<img src='Images/Icon Images/Religion.webp' alt='Religion icon' style='width:16px;height:16px;'>")
                .replace(/{relic_icon}/g, "<img src='Images/Icon Images/Relic.webp' alt='Relic icon' style='width:16px;height:16px;'>")
                .replace(/{military_policy_icon}/g, "<img src='Images/Icon Images/MilitaryPolicyCard.webp' alt='MilitaryPolicyCard icon' style='width:16px;height:16px;'>")
                .replace(/{diplomacy_policy_icon}/g, "<img src='Images/Icon Images/DiplomaticPolicyCard.webp' alt='DiplomaticPolicyCard icon' style='width:16px;height:16px;'>")
                .replace(/{wildcard_icon}/g, "<img src='Images/Icon Images/Wildcard.webp' alt='Wildcard icon' style='width:16px;height:16px;'>")
                .replace(/{economic_policy_icon}/g, "<img src='Images/Icon Images/EconomicPolicyCard.webp' alt='EconomicPolicyCard icon' style='width:16px;height:16px;'>")
                .replace(/{citizen_icon}/g, "<img src='Images/Icon Images/Citizen.webp' alt='Citizen icon' style='width:16px;height:16px;'>")
                .replace(/{tourism_icon}/g, "<img src='Images/Icon Images/Tourism.webp' alt='Tourism icon' style='width:16px;height:16px;'>")
                .replace(/{merchant_icon}/g, "<img src='Images/Icon Images/Merchant.webp' alt='Merchant icon' style='width:16px;height:16px;'>")
                .replace(/{artist_icon}/g, "<img src='Images/Icon Images/Artist.webp' alt='Artist icon' style='width:16px;height:16px;'>")
                .replace(/{art_icon}/g, "<img src='Images/Icon Images/Art.webp' alt='Art icon' style='width:16px;height:16px;'>")
                .replace(/{favor_icon}/g, "<img src='Images/Icon Images/DiplomaticFavor.webp' alt='DiplomaticFavor icon' style='width:16px;height:16px;'>")
                .replace(/{power_icon}/g, "<img src='Images/Icon Images/Power.webp' alt='Power icon' style='width:16px;height:16px;'>")
                .replace(/{faith_icon}/g, "<img src='Images/Icon Images/Faith.webp' alt='Faith icon' style='width:16px;height:16px;'>");
                
                // Append the description with icons to the container
                descriptionContainer.innerHTML += descriptionWithIcons;
                
                // Display victory conditions the wonder is good for at the end of the description
                const victoryConditionsContainer = document.createElement("div");
                victoryConditionsContainer.classList.add("victory-conditions-container");
                
                // Append the victory image and tooltip to the victory conditions container
                // When creating the tooltip for the victory conditions in the description container
                wonder.victory.forEach(victory => {
                    if (victory === "all") {
                        // Display "ALL" if the wonder is good for all victory conditions
                        const allElement = document.createElement("p");
                        allElement.textContent = "All Victory Types";
                        victoryConditionsContainer.appendChild(allElement);
                    } else {
                        // Otherwise, append the victory condition image and tooltip
                        const victoryImage = document.createElement("img");
                        victoryImage.src = victoryConditionsMap[victory].src;
                        victoryImage.alt = victoryConditionsMap[victory].alt;
                        
                        // Create a tooltip element and set its class and content
                        const tooltip = document.createElement("div");
                        tooltip.classList.add("description-tooltip");
                        tooltip.textContent = victoryConditionsMap[victory].alt;
                        tooltip.style.visibility = 'hidden';
                        tooltip.style.opacity = '0';
                        
                        // Append the tooltip after the victory image in the DOM
                        victoryImage.addEventListener("mouseenter", () => {
                            tooltip.style.visibility = "visible";
                            tooltip.style.opacity = "1";
                        });
                        victoryImage.addEventListener("mouseleave", () => {
                            tooltip.style.visibility = "hidden";
                            tooltip.style.opacity = "0";
                        });
                        
                        // Append the victory image and tooltip
                        const wrapper = document.createElement("div");
                        wrapper.appendChild(victoryImage);
                        wrapper.appendChild(tooltip);
                        wrapper.classList.add('victory-wrapper');
                        victoryConditionsContainer.appendChild(wrapper);
                    }
                });
                
                // Append the victory conditions container at the end of the description container
                descriptionContainer.appendChild(victoryConditionsContainer);
            });
            
            // Append the wonder container to the tier container
            currentTierContainer.appendChild(wonderContainer);
        });
    }
});
