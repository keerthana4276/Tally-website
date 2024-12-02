// Toggle mobile menu (hamburger)
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle the mobile menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Handle dropdown on hover (for desktop)
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseenter', () => {
    dropdownMenu.style.display = 'block'; // Show dropdown
});

dropdown.addEventListener('mouseleave', () => {
    dropdownMenu.style.display = 'none'; // Hide dropdown
});

// Optionally, for click-to-open on mobile for the dropdown
dropdown.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});









  
// JavaScript to toggle the dropdown menu when the hamburger icon is clicked
document.getElementById('menu-toggle').addEventListener('click', function () {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('active'); // Toggle 'active' class on dropdown menu
  });
  
  









// Get form, warning message, and thank you message elements
const form = document.getElementById('myForm');
const warningMessage = document.getElementById('warningMessage');
const thankYouMessage = document.getElementById('thankYouMessage');

// Function to check if form fields are empty
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;

    // If any field is empty, show the warning message and prevent form submission
    if (!name || !phone || !email || !company) {
        event.preventDefault();  // Prevent form submission
        warningMessage.classList.remove('hidden'); // Show warning message
        thankYouMessage.classList.add('hidden'); // Hide thank you message if it's visible
    } else {
        // Show thank you message and reset form
        thankYouMessage.classList.remove('hidden');
        warningMessage.classList.add('hidden');
        form.reset(); // Optionally reset the form
    }
});



// JavaScript to toggle the menu for the hamburger icon
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
  }
  
  











