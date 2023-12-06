// Array of items to look for
const names = [
    'River Murray',
    'Sebastian Briggs',
    'Rayan Ward',
    'Kaliyah Ramos',
    'Cal Munoz',
    'Faith Ellis',
    'Aviana Wright',
    'Angel Pena',
    'Kaylani Newman',
    'Legacy Cook'
]

// Get the Search Bar Input
const searchBar = document.getElementById('searchBar');
// Get the section where the items to look for are
const searchSection = document.getElementById('searchSection');

// Display the items dynamically when the window loads
window.addEventListener('DOMContentLoaded', () => {
    displayNames(names);
})

// Function to display the items
const displayNames = (name) => {
    // Loop over the items and write the html to display them
    let displayName = name.map((item) => {
        return `<h4>${item}</h4>`
    }).join(''); // Join all the html that was created
    
    // Return the items in the section
    searchSection.innerHTML = displayName;
}

// Search everytime we write
searchBar.addEventListener('input', (e) => {
    // Get the value of what is being inputed
    let value = e.target.value;
    // Make everything Lower Case to avoid case sensitivity
    value = value.toLowerCase();

    // Filter through the array of items
    let filteredNames = names.filter((name) => {
        // Return the items that have the value inputed
        return(
            name.toLowerCase().includes(value)
        )
    })

    // Display only the items that match the input
    displayNames(filteredNames)
})