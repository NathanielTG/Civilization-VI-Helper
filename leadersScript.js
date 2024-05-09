document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const leadersList = document.getElementById("leadersList");
    
    const leadersData = [
        {
            name: "Abraham Lincoln",
            civilization: "America",
            primaryVictories: ["domination"],
            secondaryVictories: ["diplomacy", "culture"]
        },
        {
            name: "Alexander",
            civilization: "Macedon",
            primaryVictories: ["domination", "science"],
            secondaryVictories: null,
        },
        {
            name: "Amanitore",
            civilization: "Nubia",
            primaryVictories: ["domination"],
            secondaryVictories: ["religion"]
        },
        {
            name: "Ambiorix",
            civilization: "Gaul",
            primaryVictories: ["domination"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Bà Triệu",
            civilization: "Vietnam",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: null
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
            secondaryVictories: ["domination", "diplomacy"]
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
            primaryVictories: ["culture"],
            secondaryVictories: ["diplomacy", "religion"]
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
            primaryVictories: ["domination"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Dido",
            civilization: "Phoenicia",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Eleanor of Aquitaine (England)",
            civilization: "England",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: null
        },
        {
            name: "Eleanor of Aquitaine (France)",
            civilization: "France",
            primaryVictories: ["domination", "culture"],
            secondaryVictories: null
        },
        {
            name: "Elizabeth I",
            civilization: "England",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "diplomacy"]
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
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "diplomacy"]
        },
        {
            name: "Gitarja",
            civilization: "Indonesia",
            primaryVictories: ["domination"],
            secondaryVictories: ["science", "culture", "religion"]
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
            secondaryVictories: null
        },
        {
            name: "Harald Hardrada (Varangian)",
            civilization: "Norway",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Hojo Tokimune",
            civilization: "Japan",
            primaryVictories: ["domination", "science", "culture"],
            secondaryVictories: ["religion"]
        },
        {
            name: "Jadwiga",
            civilization: "Poland",
            primaryVictories: ["religion"],
            secondaryVictories: ["domination", "culture"]
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
            primaryVictories: ["science"],
            secondaryVictories: ["domination", "diplomacy"]
        },
        {
            name: "John Curtin",
            civilization: "Australia",
            primaryVictories: ["science", "domination", ],
            secondaryVictories: ["culture", "religion", "diplomacy"]
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
            secondaryVictories: null
        },
        {
            name: "Kublai Khan (China)",
            civilization: "China",
            primaryVictories: ["science"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Kublai Khan (Mongolia)",
            civilization: "Mongolia",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Kupe",
            civilization: "Māori",
            primaryVictories: ["culture", "religion"],
            secondaryVictories: null
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
            primaryVictories: ["domination"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Ludwig II",
            civilization: "Germany",
            primaryVictories: ["culture"],
            secondaryVictories: ["science", "domination"]
        },
        {
            name: "Mansa Musa",
            civilization: "Mali",
            primaryVictories: ["religion"],
            secondaryVictories: ["diplomacy"]
        },
        {
            name: "Matthias Corvinus",
            civilization: "Hungary",
            primaryVictories: ["domination", "diplomacy"],
            secondaryVictories: ["culture", "religion"]
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
            secondaryVictories: ["religion"]
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
            primaryVictories: ["domination"],
            secondaryVictories: ["religion", "culture"]
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
            primaryVictories: ["science", "religion"],
            secondaryVictories: ["culture", "domination"]
        },
        {
            name: "Pedro II",
            civilization: "Brazil",
            primaryVictories: ["culture"],
            secondaryVictories: ["science", "religion", "domination"]
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
            primaryVictories: ["domination", "religion"],
            secondaryVictories: ["science"]
        },
        {
            name: "Poundmaker",
            civilization: "Cree",
            primaryVictories: ["diplomacy"],
            secondaryVictories: null
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
            primaryVictories: ["science", "domination"],
            secondaryVictories: ["culture"]
        },
        {
            name: "Ramses II",
            civilization: "Egypt",
            primaryVictories: ["culture"],
            secondaryVictories: ["religion"]
        },
        {
            name: "Robert the Bruce",
            civilization: "Scotland",
            primaryVictories: ["science"],
            secondaryVictories: null
        },
        {
            name: "Saladin (Sultan)",
            civilization: "Arabia",
            primaryVictories: ["religion", "domination"],
            secondaryVictories: ["science"]
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
            secondaryVictories: null
        },
        {
            name: "Seondeok",
            civilization: "Korea",
            primaryVictories: ["science"],
            secondaryVictories: null
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
            secondaryVictories: ["science"]
        },
        {
            name: "Sundiata Keita",
            civilization: "Mali",
            primaryVictories: ["religion"],
            secondaryVictories: ["culture", "diplomacy"]
        },
        {
            name: "Tamar",
            civilization: "Georgia",
            primaryVictories: ["diplomacy", "religion"],
            secondaryVictories: ["culture", "domination"]
        },
        {
            name: "Teddy Roosevelt (Bull Moose)",
            civilization: "America",
            primaryVictories: ["culture"],
            secondaryVictories: ["science", "diplomacy"]
        },
        {
            name: "Teddy Roosevelt (Rough Rider)",
            civilization: "America",
            primaryVictories: ["diplomacy"],
            secondaryVictories: ["culture", "domination"]
        },
        {
            name: "Theodora",
            civilization: "Byzantium",
            primaryVictories: ["domination", "religion"],
            secondaryVictories: null
        },
        {
            name: "Tokugawa",
            civilization: "Japan",
            primaryVictories: ["science"],
            secondaryVictories: ["domination"]
        },
        {
            name: "Tomyris",
            civilization: "Scythia",
            primaryVictories: ["domination"],
            secondaryVictories: ["religion"]
        },
        {
            name: "Trajan",
            civilization: "Rome",
            primaryVictories: ["domination"],
            secondaryVictories: null
        },
        {
            name: "Victoria (Age of Empire)",
            civilization: "England",
            primaryVictories: ["domination"],
            secondaryVictories: ["science"]
        },
        {
            name: "Victoria (Age of Steam)",
            civilization: "England",
            primaryVictories: ["domination"],
            secondaryVictories: ["science"]
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
            primaryVictories: ["science"],
            secondaryVictories: ["diplomacy", "culture"]
        },
        {
            name: "Wu Zetian",
            civilization: "China",
            primaryVictories: ["science"],
            secondaryVictories: ["culture", "diplomacy"]
        },
        {
            name: "Yongle",
            civilization: "China",
            primaryVictories: ["science"],
            secondaryVictories: ["culture", "religion", "diplomacy"]
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
            // Create leader elements and append them to the list
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
            
            /*
            // Create a tooltip element
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = leader.name;
            */
            // Append the image and tooltip to the leader element
            leaderElement.appendChild(leaderImage);
            //leaderElement.appendChild(tooltip);
            
            // Append the leader element to the list
            leadersList.appendChild(leaderElement);
        });
        
        // Add event listeners to leader images
        addLeaderEventListeners();
    }
    
    // Modal functions
    function openModal(leader) {
        // Get the modal and modal content elements
        const modal = document.getElementById("leaderModal");
        const modalContent = document.getElementById("modalContent");
        
        // Clear previous content
        modalContent.innerHTML = "";
        
        // Display the leader details in the modal
        displayLeaderDetailsInModal(leader);
        
        // Show the modal
        modal.style.display = "flex";
    }    
    
    function displayLeaderDetailsInModal(leader) {
        // Get the modal content element
        const modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = ""; // Clear existing content in modal content
    
        // Create a container to hold leader and civ details side by side
        const leaderCivContainer = document.createElement("div");
        leaderCivContainer.classList.add('leader-civ-container'); // Add a CSS class for styling
    
        // Create a container for leader details
        const leaderDetailsContainer = document.createElement("div");
        leaderDetailsContainer.classList.add('leader-details-container'); // Add a CSS class for styling
    
        // Create the leader image
        const leaderImage = new Image();
        leaderImage.src = `Images/Leader Images/${leader.name}.webp`;
        leaderImage.alt = leader.name;
        
        // Append leader image
        leaderDetailsContainer.appendChild(leaderImage);
        
        // Append leader name
        const leaderNameElement = document.createElement("h2");
        leaderNameElement.textContent = leader.name;
        leaderDetailsContainer.appendChild(leaderNameElement);
        
        // Append leader details container to leader-civ container
        leaderCivContainer.appendChild(leaderDetailsContainer);
        
        // Create a container for civ details
        const civDetailsContainer = document.createElement("div");
        civDetailsContainer.classList.add('civ-details-container'); // Add a CSS class for styling
        
        // Create civ image
        const civImage = new Image();
        civImage.src = `Images/Civ Images/${leader.civilization} - ${leader.name}.webp`;
        civImage.alt = leader.civilization;
    
        // Append civ image
        civDetailsContainer.appendChild(civImage);
        
        // Append civ name
        const civNameElement = document.createElement("h2");
        civNameElement.textContent = leader.civilization;
        civDetailsContainer.appendChild(civNameElement);
        
        // Append civ details container to leader-civ container
        leaderCivContainer.appendChild(civDetailsContainer);
        
        // Append leader-civ container to modal content
        modalContent.appendChild(leaderCivContainer);
    
        // Create containers for primary and secondary victories
        const primaryVictoriesContainer = document.createElement("div");
        primaryVictoriesContainer.classList.add('primary-victories-container');
    
        const primaryVictoriesLabel = document.createElement("p");
        primaryVictoriesLabel.textContent = "Primary Victories:";
        primaryVictoriesContainer.appendChild(primaryVictoriesLabel);
    
        // Create a sub-container for primary victory images
        const primaryImagesContainer = document.createElement("div");
        primaryImagesContainer.classList.add('victory-images-container');
        primaryVictoriesContainer.appendChild(primaryImagesContainer);
    
        // Display primary victory images in the sub-container
        displayVictoryImages(primaryImagesContainer, leader.primaryVictories, victoryImageMap);
        
        // Append primary victories container to modal content
        modalContent.appendChild(primaryVictoriesContainer);
    
        // Check if there are secondary victories
        if (leader.secondaryVictories && leader.secondaryVictories.length > 0) {
            const secondaryVictoriesContainer = document.createElement("div");
            secondaryVictoriesContainer.classList.add('secondary-victories-container');
            
            const secondaryVictoriesLabel = document.createElement("p");
            secondaryVictoriesLabel.textContent = "Secondary Victories:";
            secondaryVictoriesContainer.appendChild(secondaryVictoriesLabel);
            
            // Create a sub-container for secondary victory images
            const secondaryImagesContainer = document.createElement("div");
            secondaryImagesContainer.classList.add('victory-images-container');
            secondaryVictoriesContainer.appendChild(secondaryImagesContainer);
            
            // Display secondary victory images in the sub-container
            displayVictoryImages(secondaryImagesContainer, leader.secondaryVictories, victoryImageMap);
            
            // Append secondary victories container to modal content
            modalContent.appendChild(secondaryVictoriesContainer);
        }
    }
        
    // Function to add click event listeners to leader images
    function addLeaderEventListeners() {
        const leaderImages = document.querySelectorAll(".leader img");
        
        leaderImages.forEach(image => {
            image.addEventListener("click", function () {
                const leaderName = this.alt;
                
                // Find the leader data from leadersData
                const leader = leadersData.find(l => l.name === leaderName);
                
                // Determine if we are on a mobile view (e.g., using CSS media query check)
                if (window.innerWidth <= 768) { // 768px is a common mobile breakpoint
                    // Open the modal if on mobile view
                    openModal(leader);
                } else {
                    // Otherwise, display leader details in the right-hand container
                    displayLeaderDetails(leader);
                }
            });
        });
    }
    
    // Call the addLeaderEventListeners function to set up the event listeners
    addLeaderEventListeners();
    
    // Close the modal when the close button is clicked
    const modal = document.getElementById("leaderModal");
    const closeModalButton = modal.querySelector(".close");
    
    closeModalButton.addEventListener("click", function () {
        modal.style.display = "none";
    });
    
    // Close the modal when the user clicks outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    const victoryImageMap = {
        "domination": "Images/Victory Type Images/Domination_Victory_29.webp",
        "science": "Images/Victory Type Images/Science_Victory_29.webp",
        "culture": "Images/Victory Type Images/Culture_Victory_29.webp",
        "religion": "Images/Victory Type Images/Religious_Victory_29.webp",
        "diplomacy": "Images/Victory Type Images/Diplomatic_Victory_29.webp"
    };        
    
    function displayLeaderDetails(leader) {
        // Get the right-hand container element
        const rightHandContainer = document.getElementById("rightHandContainer");
        rightHandContainer.innerHTML = ""; // Clear the right-hand container
        
        // Create a parent container to hold leader and civ details side by side
        const leaderCivContainer = document.createElement("div");
        leaderCivContainer.classList.add('leader-civ-container'); // Add a CSS class for styling
        
        // Create a container for leader details (image and h2)
        const leaderDetailsContainer = document.createElement("div");
        leaderDetailsContainer.classList.add('leader-details-container'); // Add a CSS class for styling
        
        // Create and append the leader image
        const leaderImage = new Image();
        leaderImage.src = `Images/Leader Images/${leader.name}.webp`;
        leaderImage.alt = leader.name;
        
        // Create a div container for the leader image
        const leaderImageDiv = document.createElement("div");
        leaderImageDiv.classList.add('leader-image-container');
        leaderImageDiv.appendChild(leaderImage);
        
        // Append leader name
        const leaderNameElement = document.createElement("h2");
        leaderNameElement.textContent = leader.name;
        
        // Append leader image and name to leader details container
        leaderDetailsContainer.appendChild(leaderImageDiv);
        leaderDetailsContainer.appendChild(leaderNameElement);
        
        // Append leader details container to the leader-civ container
        leaderCivContainer.appendChild(leaderDetailsContainer);
        
        // Create a container for civ details (image and h3)
        const civDetailsContainer = document.createElement("div");
        civDetailsContainer.classList.add('civ-details-container'); // Add a CSS class for styling
        
        // Create a div container for the civ image
        const civImageDiv = document.createElement("div");
        civImageDiv.classList.add('civ-image-container');
        
        // Create an image element for the civ image
        const civImage = new Image();
        civImage.src = `Images/Civ Images/${leader.civilization} - ${leader.name}.webp`;
        civImage.alt = leader.civilization;
        civImageDiv.appendChild(civImage);
        
        // Append civ name
        const civNameElement = document.createElement("h2");
        civNameElement.textContent = leader.civilization;
        
        // Append civ image and name to civ details container
        civDetailsContainer.appendChild(civImageDiv);
        civDetailsContainer.appendChild(civNameElement);
        
        // Append civ details container to the leader-civ container
        leaderCivContainer.appendChild(civDetailsContainer);
        
        // Append the leader-civ container to the right-hand container
        rightHandContainer.appendChild(leaderCivContainer);
        
        // Create containers for primary and secondary victories
        const primaryVictoriesContainer = document.createElement("div");
        primaryVictoriesContainer.classList.add('primary-victories-container');
        
        const primaryVictoriesLabel = document.createElement("p");
        primaryVictoriesLabel.textContent = "Primary Victories:";
        primaryVictoriesContainer.appendChild(primaryVictoriesLabel);
        
        // Create a sub-container for primary victory images
        const primaryImagesContainer = document.createElement("div");
        primaryImagesContainer.classList.add('victory-images-container');
        primaryVictoriesContainer.appendChild(primaryImagesContainer);
        
        displayVictoryImages(primaryImagesContainer, leader.primaryVictories, victoryImageMap);
        
        rightHandContainer.appendChild(primaryVictoriesContainer);
        
        // Create a secondary victories container with header if there are secondary victories
        if (leader.secondaryVictories && leader.secondaryVictories.length > 0) {
            const secondaryVictoriesContainer = document.createElement("div");
            secondaryVictoriesContainer.classList.add('secondary-victories-container');
            
            const secondaryVictoriesLabel = document.createElement("p");
            secondaryVictoriesLabel.textContent = "Secondary Victories:";
            secondaryVictoriesContainer.appendChild(secondaryVictoriesLabel);
            
            // Create a sub-container for secondary victory images and set it to use Flexbox
            const secondaryImagesContainer = document.createElement("div");
            secondaryImagesContainer.classList.add('victory-images-container');
            secondaryVictoriesContainer.appendChild(secondaryImagesContainer);
            
            // Display secondary victory images in the sub-container
            displayVictoryImages(secondaryImagesContainer, leader.secondaryVictories, victoryImageMap);
            
            // Append the secondary victories container to the right-hand container
            rightHandContainer.appendChild(secondaryVictoriesContainer);
        } else {
            const noSecondaryVictoriesElement = document.createElement("p");
            noSecondaryVictoriesElement.textContent = "";
            rightHandContainer.appendChild(noSecondaryVictoriesElement);
        }
    }
    
    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    // Function to display victory images in the specified container
    function displayVictoryImages(container, victoryTypes, victoryImageMap) {
        if (!Array.isArray(victoryTypes)) {
            console.warn('Victory types should be an array, but got:', victoryTypes);
            return; // Exit the function early if victoryTypes is not an array
        }
        // Existing code to display victory images
        victoryTypes.forEach(victory => {
            // Get the victory image path based on the victory type
            const victoryImagePath = victoryImageMap[victory];
            
            // Create a div container for each victory image
            const victoryImageDiv = document.createElement("div");
            victoryImageDiv.classList.add('victory-image-container');
            
            // Create an image element for the victory image
            const victoryImage = new Image();
            victoryImage.src = victoryImagePath;
            victoryImage.alt = victory;
            
            // Append the victory image to the victory image container
            victoryImageDiv.appendChild(victoryImage);
            
            // Create a tooltip element for the victory image
            const tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = capitalizeFirstLetter(victory); // Set the victory type as tooltip content
            
            // Set initial tooltip visibility and opacity
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
            
            // Append the tooltip to the victory image container
            victoryImageDiv.appendChild(tooltip);
            
            // Add mouse enter and leave event listeners to the victory image
            victoryImage.addEventListener("mouseenter", () => {
                tooltip.style.visibility = 'visible';
                tooltip.style.opacity = '1';
            });
            victoryImage.addEventListener("mouseleave", () => {
                tooltip.style.visibility = 'hidden';
                tooltip.style.opacity = '0';
            });
            
            // Append the victory image container to the specified container
            container.appendChild(victoryImageDiv);
        });
    }
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateLeaders);
    });
    
});
