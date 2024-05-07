document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const leadersList = document.getElementById("leadersList");
    const rightHandContainer = document.getElementById("rightHandContainer");
    
    const leadersData = [
        {
            name: "Abraham Lincoln",
            civilization: "America",
            primaryVictories: ["domination", "diplomacy", "culture"],
            secondaryVictories: null
        },
        {
            name: "Alexander",
            civilization: "Macedon",
            primaryVictories: ["domination", "science"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Amanitore",
            civilization: "Nubia",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture", "religion", "diplomacy"]
        },
        {
            name: "Ambiorix",
            civilization: "Gaul",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture"]
        },
        {
            name: "Bà Triệu",
            civilization: "Vietnam",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: ["science"]
        },
        {
            name: "Basil II",
            civilization: "Byzantium",
            primaryVictories: ["domination", "religion"],
            secondaryVictories: null
        },
        {
            name: "Catherine de Medici (Black Queen)",
            civilization: "France",
            primaryVictories: ["culture"],
            secondaryVictories: ["domination"]
        },
        {
            name: "Catherine de Medici (Magnificence)",
            civilization: "France",
            primaryVictories: ["culture"],
            secondaryVictories: null
        },
        {
            name: "Chandragupta",
            civilization: "India",
            primaryVictories: ["domination", "religion"],
            secondaryVictories: null
        },
        {
            name: "Cleopatra (Egyptian)",
            civilization: "Egypt",
            primaryVictories: ["culture", "diplomacy", "religion"],
            secondaryVictories: null
        },
        {
            name: "Cleopatra (Ptolemaic)",
            civilization: "Egypt",
            primaryVictories: ["culture"],
            secondaryVictories: ["religion"]
        },
        {
            name: "Cyrus",
            civilization: "Persia",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: ["religion", "diplomacy"]
        },
        {
            name: "Dido",
            civilization: "Persia",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Eleanor of Aquitaine (England)",
            civilization: "England",
            primaryVictories: ["domination", "science", "culture"],
            secondaryVictories: ["diplomacy"]
        },
        {
            name: "Eleanor of Aquitaine (France)",
            civilization: "France",
            primaryVictories: ["culture", "domination"],
            secondaryVictories: ["diplomacy"]
        },
        {
            name: "Elizabeth I",
            civilization: "England",
            primaryVictories: ["domination", "science"],
            secondaryVictories: ["diplomacy", "culture"]
        },
        {
            name: "Frederick Barbarossa",
            civilization: "Germany",
            primaryVictories: ["domination", "science"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Gandhi",
            civilization: "India",
            primaryVictories: ["religion"],
            secondaryVictories: null
        },
        {
            name: "Genghis Khan",
            civilization: "Mongolia",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Gilgamesh",
            civilization: "Sumeria",
            primaryVictories: ["domination", "science", "diplomacy"],
            secondaryVictories: null
        },
        {
            name: "Gitarja",
            civilization: "Indonesia",
            primaryVictories: ["domination", "science", "culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Gorgo",
            civilization: "Greece",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: null
        },
        {
            name: "Hammurabi",
            civilization: "Babylon",
            primaryVictories: ["domination"],
            secondaryVictories: ["culture", "science"]
        },
        {
            name: "Harald Hardrada (Konge)",
            civilization: "Norway",
            primaryVictories: ["domination"],
            secondaryVictories: ["religion"]
        },
        {
            name: "Harald Hardrada (Varangian)",
            civilization: "Norway",
            primaryVictories: ["domination"],
            secondaryVictories: ["religion", "diplomacy"]
        },
        {
            name: "Hojo Tokimune",
            civilization: "Japan",
            primaryVictories: ["domination", "science", "culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Jadwiga",
            civilization: "Poland",
            primaryVictories: ["domination", "culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Jayavarman VII",
            civilization: "Khmer",
            primaryVictories: ["culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "João III",
            civilization: "Portugal",
            primaryVictories: ["science", "diplomacy"],
            secondaryVictories: ["domination"]
        },
        {
            name: "John Curtin",
            civilization: "Australia",
            primaryVictories: ["science", "diplomacy", "domination", "culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Julius Caesar",
            civilization: "Rome",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Kristina",
            civilization: "Sweden",
            primaryVictories: ["culture", "diplomacy"],
            secondaryVictories: ["science"]
        },
        {
            name: "Kublai Khan (China)",
            civilization: "China",
            primaryVictories: ["science", "culture"],
            secondaryVictories: null
        },
        {
            name: "Kublai Khan (Mongolia)",
            civilization: "Mongolia",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture"]
        },
        {
            name: "Kupe",
            civilization: "Māori",
            primaryVictories: ["culture", "religion"],
            secondaryVictories: ["science"]
        },
        {
            name: "Lady Six Sky",
            civilization: "Maya",
            primaryVictories: ["science"],
            secondaryVictories: null
        },
        {
            name: "Lautaro",
            civilization: "Mapuche",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: null
        },
        {
            name: "Ludwig II",
            civilization: "Germany",
            primaryVictories: ["culture"],
            secondaryVictories: ["science", "diplomacy", "domination"]
        },
        {
            name: "Mansa Musa",
            civilization: "Mali",
            primaryVictories: ["diplomacy", "religion"],
            secondaryVictories: null
        },
        {
            name: "Matthias Corvinus",
            civilization: "Hungary",
            primaryVictories: ["domination", "diplomacy"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Menelik II",
            civilization: "Ethiopia",
            primaryVictories: ["culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Montezuma",
            civilization: "Aztec",
            primaryVictories: ["domination"],
            secondaryVictories: ["culture", "religion"]
        },
        {
            name: "Mvemba a Nzinga",
            civilization: "Kongo",
            primaryVictories: ["culture"],
            secondaryVictories: null
        },
        {
            name: "Nadar Shah",
            civilization: "Persia",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: ["religion", "diplomacy"]
        },
        {
            name: "Nzinga Mbande",
            civilization: "Kongo",
            primaryVictories: ["culture"],
            secondaryVictories: null
        },
        {
            name: "Pachacuti",
            civilization: "Inca",
            primaryVictories: ["culture", "science", "religion"],
            secondaryVictories: null
        },
        {
            name: "Pedro II",
            civilization: "Brazil",
            primaryVictories: ["culture", "science", "religion", "domination"],
            secondaryVictories: null
        },
        {
            name: "Pericles",
            civilization: "Greece",
            primaryVictories: ["culture", "diplomacy"],
            secondaryVictories: null
        },
        {
            name: "Peter",
            civilization: "Russia",
            primaryVictories: ["culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Philip II",
            civilization: "Spain",
            primaryVictories: ["domination", "religion", "science"],
            secondaryVictories: null
        },
        {
            name: "Poundmaker",
            civilization: "Cree",
            primaryVictories: ["diplomacy"],
            secondaryVictories: ["science"]
        },
        {
            name: "Qin Shi Huang (Mandate of Heaven)",
            civilization: "China",
            primaryVictories: ["culture", "science"],
            secondaryVictories: null
        },
        {
            name: "Qin Shi Huang (Unifier)",
            civilization: "China",
            primaryVictories: ["culture", "science", "domination"],
            secondaryVictories: null
        },
        {
            name: "Ramses II",
            civilization: "Egypt",
            primaryVictories: ["culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Robert the Bruce",
            civilization: "Scotland",
            primaryVictories: ["science"],
            secondaryVictories: ["domination", "culture", "diplomacy"]
        },
        {
            name: "Saladin (Sultan)",
            civilization: "Arabia",
            primaryVictories: ["science", "religion", "domination"],
            secondaryVictories: null
        },
        {
            name: "Saladin (Vizier)",
            civilization: "Arabia",
            primaryVictories: ["science", "religion"],
            secondaryVictories: null
        },
        {
            name: "Sejong",
            civilization: "Korea",
            primaryVictories: ["science"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Seondeok",
            civilization: "Korea",
            primaryVictories: ["science"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Shaka",
            civilization: "Zulu",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Simón Bolívar",
            civilization: "Gran Colombia",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Suleiman (Kanuni)",
            civilization: "Ottoman",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Suleiman (Muhteşem)",
            civilization: "Ottoman",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture"]
        },
        {
            name: "Sundiata Keita",
            civilization: "Mali",
            primaryVictories: ["culture", "diplomacy", "religion"],
            secondaryVictories: null
        },
        {
            name: "Tamar",
            civilization: "Georgia",
            primaryVictories: ["culture", "diplomacy", "religion", "domination"],
            secondaryVictories: null
        },
        {
            name: "Teddy Roosevelt (Bull Moose)",
            civilization: "America",
            primaryVictories: ["culture", "diplomacy"],
            secondaryVictories: ["science"]
        },
        {
            name: "Teddy Roosevelt (Rough Rider)",
            civilization: "America",
            primaryVictories: ["culture", "diplomacy"],
            secondaryVictories: ["domination"]
        },
        {
            name: "Theodora",
            civilization: "Byzantine",
            primaryVictories: ["domination", "religion"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Tokugawa",
            civilization: "Japan",
            primaryVictories: ["science", "culture"],
            secondaryVictories: null
        },
        {
            name: "Tomyris",
            civilization: "Scythia",
            primaryVictories: ["domination"],
            secondaryVictories: ["religion", "culture"]
        },
        {
            name: "Trajan",
            civilization: "Scythia",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Victoria (Age of Empire)",
            civilization: "England",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture"]
        },
        {
            name: "Victoria (Age of Steam)",
            civilization: "England",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture"]
        },
        {
            name: "Wilfred Laurier",
            civilization: "Canada",
            primaryVictories: ["culture", "diplomacy"],
            secondaryVictories: null
        },
        {
            name: "Wilhelmina",
            civilization: "Netherlands",
            primaryVictories: ["science", "culture"],
            secondaryVictories: ["diplomacy"]
        },
        {
            name: "Wu Zetian",
            civilization: "China",
            primaryVictories: ["science", "culture", "religion"],
            secondaryVictories: null
        },
        {
            name: "Yongle",
            civilization: "China",
            primaryVictories: ["science", "culture", "religion"],
            secondaryVictories: null
        },

    ];
    
    // Initial rendering on page load
    preloadImages();
    
    function preloadImages() {
        leadersData.forEach(leader => {
            const img = new Image();
            img.onload = function () {
                // Once the image is loaded, render the leaders
                renderLeaders([]);
            };
            img.src = `Images/Leader Images/${leader.name}.webp`;
        });
    }
    
    function updateLeaders() {
        const selectedPrimaryVictories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.id.replace("Checkbox", ""));
        
        renderLeaders(selectedPrimaryVictories);
    }
    
    function renderLeaders(selectedPrimaryVictories) {
        leadersList.innerHTML = ""; // Clear the list
        
        leadersData.forEach(leader => {
            const leaderElement = document.createElement("div");
            leaderElement.classList.add("leader");
            
            // Create an image element and set its attributes
            const leaderImage = new Image();
            leaderImage.src = `Images/Leader Images/${leader.name}.webp`;
            leaderImage.alt = leader.name;
            
            // Initialize match flags
            let isExactMatch = false;
            let hasPartialMatch = false;
            
            // Check for exact match and partial match with the leader's primary victories
            if (leader.primaryVictories) {
                // Ensure primaryVictories is an array
                const primaryVictories = Array.isArray(leader.primaryVictories) ? leader.primaryVictories : [leader.primaryVictories];
                
                // Check if all primary victories match the user's selected primary victories
                isExactMatch = selectedPrimaryVictories.length === primaryVictories.length &&
                selectedPrimaryVictories.every(victory => primaryVictories.includes(victory));
                
                // Check if at least one primary victory is matched
                hasPartialMatch = primaryVictories.some(victory => selectedPrimaryVictories.includes(victory));
            }
            
            // Check for partial match with the leader's backup victories
            if (leader.secondaryVictories) {
                hasPartialMatch = hasPartialMatch || leader.secondaryVictories.some(victory => selectedPrimaryVictories.includes(victory));
            }
            
            // Apply visual effects based on match conditions
            if (isExactMatch) {
                // Apply exact match visual effect (e.g., yellow border)
                leaderImage.classList.add("exact-match");
                leaderImage.style.filter = 'brightness(130%)';
            } else if (hasPartialMatch) {
                // Light up the image for a partial match (e.g., increase brightness)
                leaderImage.style.filter = 'brightness(130%)';
            } else {
                // Dim the image if there is no match
                leaderImage.style.filter = 'brightness(25%)';
            }
            
            // Create a tooltip element
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = leader.name;
            
            // Append the image and tooltip to the leader element
            leaderElement.appendChild(leaderImage);
            leaderElement.appendChild(tooltip);
            
            // Append the leader element to the list
            leadersList.appendChild(leaderElement);
        });
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateLeaders);
    });
});
