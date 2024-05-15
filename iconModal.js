// Create modal container dynamically
const legendModal = document.createElement("div");
legendModal.id = "legendModal";
legendModal.classList.add("modal");

// Create modal content dynamically
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");

// Create close button
const closeButton = document.createElement("span");
closeButton.classList.add("close");
closeButton.textContent = "×"; // Using '×' for close symbol

// Create legend content
const legendHeading = document.createElement("h2");
legendHeading.textContent = "Explaination";

// Create explanation paragraph with colored words
const explanationParagraph = document.createElement("p");
explanationParagraph.innerHTML = "If a leader lights up without any colored circle surrounding the leader's portrait when you select a victory type, that means the victory type you selected matches one of the leaders <span class='underline'>Secondary</span> or <span class='underline'>Backup</span> Victory(ies).<br><br>If a leader is circled in <span class='highlight-yellow'>yellow</span>, that means that the leader's Ideal Victory(ies) match <span class='underline'>at least one</span> of the victory types that you selected.<br><br>If a leader is circled in <span class='highlight-teal'>blue</span>, that means that the leader's Ideal Victory(ies) match <span class='underline'>exactly</span> the victory types you've selected.<br><br>The leaders in the grid are ordered from left to right, top to bottom in alphabetical order.<br><br>Clicking on a leader will display the leader's name, the civilization that they lead, and the victory(ies) that the leader is best suited for.";

// Append elements to modal content
modalContent.appendChild(closeButton);
modalContent.appendChild(legendHeading);
modalContent.appendChild(explanationParagraph);

// Append modal content to modal container
legendModal.appendChild(modalContent);

// Add the modal to the document body
document.body.appendChild(legendModal);

// Get reference to the icon image
const legendIcon = document.getElementById("legendIcon");

// Add event listener to the icon image to open the modal
legendIcon.addEventListener("click", openLegendModal);

// Event listener to close the modal when clicking on the close button
closeButton.addEventListener("click", closeLegendModal);

// Event listener to close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === legendModal) {
        legendModal.style.display = "none";
    }
});

// Define function to open the modal
function openLegendModal() {
    // Display the modal by setting its style property to "block"
    legendModal.style.display = "block";
}

// Define function to close the modal
function closeLegendModal() {
    // Hide the modal by setting its style property to "none"
    legendModal.style.display = "none";
}
