// Get all menu items
var menuItems = document.querySelectorAll(".navbar-nav .nav-link");

// Add a click event listener to each menu item
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Remove the "active" class from all menu items
    menuItems.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add the "active" class to the clicked menu item
    this.classList.add("active");
  });
});

// Get all navbar links
var navbarLinks = document.querySelectorAll(".navbar-nav a.nav-link");

// Add a click event listener to each navbar link
navbarLinks.forEach(function (navbarLink) {
  navbarLink.addEventListener("click", function () {
    // Remove the "active" class from all navbar links
    navbarLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Add the "active" class to the clicked navbar link
    this.classList.add("active");
  });
});

// Get all sections to observe for intersection
var sections = document.querySelectorAll("section");

// Create an Intersection Observer to track which section is in view
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Remove the "active" class from all navbar links
        navbarLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        // Get the ID of the in-view section
        var sectionId = entry.target.id;

        // Find the corresponding navbar link and add the "active" class
        navbarLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.7, // Adjust this threshold as needed
  }
);

// Observe each section
sections.forEach(function (section) {
  observer.observe(section);
});

function closeMobileMenu() {
  // Close the mobile menu by removing the 'show' class
  var menu = document.getElementById("menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
}
// --------------------------Navbar function End---------------------------------------
// --------------------------Floating upwards button---------------------------------------
// Show the button when the user scrolls down
window.addEventListener("scroll", function () {
  var button = document.querySelector(".floating-upwards-button");
  if (window.scrollY > 200) {
    // Adjust this value to control when the button appears
    button.classList.add("show-button");
  } else {
    button.classList.remove("show-button");
  }
});
// --------------------------Floating upwards button End---------------------------------------
// --------------------------Mail validating---------
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyNc2mBOnyQApmtWa6ldUXUONFr63LNS0tTFyM_viQw1kZD7d2JDKZTNJ48V66aOnhTAA/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
// --------------------------Mail validating End---------


window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
  const prefersDarkMode = e.matches;
  if (prefersDarkMode) {
    document.body.style.backgroundColor = "#ffffff"; // Set your desired light background color
    document.body.style.color = "#000000"; // Set your desired dark text color
  } else {
    document.body.style.backgroundColor = "#f3f3f3"; // Set a different background color for non-dark mode
    document.body.style.color = "#333333"; // Set a different text color for non-dark mode
    // Other styles for non-dark mode can be added here
  }
});

// Listener for color scheme changes
window.matchMedia("(prefers-color-scheme: dark)").addListener(handleColorScheme);

// Initial check for color scheme on page load
handleColorScheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
