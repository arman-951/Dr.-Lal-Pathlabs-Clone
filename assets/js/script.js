// -------------------navbar full screen--------------------
// ------------for search input -----------------------
const searchInput = document.querySelector(".search-input");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropIcon = document.querySelector(".ri-arrow-down-s-line");
const menuContent = document.querySelector(".menu-content")

// Open dropdown menu on click of search input
searchInput.addEventListener("click", function (event) {
  event.stopPropagation();  // Prevent click event from propagating to the document
  dropdownMenu.classList.toggle("show");
  // Toggle the icon class to change the dropdown arrow
  dropIcon.classList.toggle("ri-arrow-up-s-line");
});

// Close the menu if clicked outside
document.addEventListener("click", function (event) {
  // Check if the click is outside the search input or the dropdown menu
  if (!searchInput.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove("show");
    dropIcon.classList.remove("ri-arrow-up-s-line"); // Reset the icon
  }
});

// Fetch the data from the local JSON file
fetch('/assets/json/cities.json')
  .then(response => response.json())  // Parse the JSON data
  .then(data => {
    const jsonData = data.cities;  // Assuming the structure of data is { cities: [...] }

    // Loop through the cities and create list items
    jsonData.forEach(curElem => {
      const listItem = document.createElement('li');
      listItem.classList.add('menu-content-list');
      listItem.textContent = curElem;  // Assuming curElem has a 'name' property
      // Append the list item to the menu content list
      menuContent.appendChild(listItem);
      listItem.style.listStyle = "none";
    });
  })
  .catch(error => console.error('Error:', error));


// ---------------guest user------------------
const guestUser = document.querySelector(".guest-user")
// console.log(guestUser)

guestUser.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(dropdownMenu.classList.toggle(".show"))
  dropdownMenu.classList.toggle("show");

})

// ---------------------for menu ------------

const toggleMenu = document.querySelector('.hamburger');
const toggleIcon = document.querySelector(".ri-menu-line");
const openMenu = document.querySelector(".menu-div");

toggleMenu.addEventListener('click', function () {
  // Toggle the icon class to switch between menu and close icons
  toggleIcon.classList.toggle("ri-menu-line");
  toggleIcon.classList.toggle("ri-close-line");
  // Toggle the menu visibility
  openMenu.classList.toggle("show");
});

// Close the menu if clicked outside
document.addEventListener("click", function (event) {
  // Check if the click is outside the icon and the menu
  if (!toggleMenu.contains(event.target) && !openMenu.contains(event.target)) {
    // Close the menu and revert the icon to the menu state
    openMenu.classList.remove("show");
    toggleIcon.classList.remove("ri-close-line"); // Reset icon to the menu state
    toggleIcon.classList.add("ri-menu-line"); // Add the menu icon back
  }
});


// -------------------for guest user------------
const openGuestMenu = document.querySelector(".guest-menu");
const clickGuestUser = document.querySelector(".guest-user");

clickGuestUser.addEventListener("click", (e) => {
  e.preventDefault()
  openGuestMenu.classList.toggle("show");
  // dropIcon.classList.toggle("ri-arrow-up-s-line");
});
// Close the menu if clicked outside
document.addEventListener("click", function (event) {
  // Check if the click is outside the icon and the menu
  if (!guestUser.contains(event.target) && !openGuestMenu.contains(event.target)) {
    // Close the menu and revert the icon to the menu state
    openGuestMenu.classList.remove("show");
    // dropIcon.classList.toggle("ri-arrow-up-s-line");
  }
});


//----------end navbar full screen-------------


// -------------------navbar full screen--------------------
// ------------for search input -----------------------
const searchMobDiv = document.querySelector(".search-m-div");
const searchDropdown = document.querySelector(".search-dropdown");
const changeIcon = document.querySelector(".ri-arrow-down-s-line");
const searchMenuContent = document.querySelector(".search-menu-content")

// Open dropdown menu on click of search input
searchMobDiv.addEventListener("click", function (event) {
  event.stopPropagation();  // Prevent click event from propagating to the document
  searchDropdown.classList.toggle("show");
  // Toggle the icon class to change the dropdown arrow
  changeIcon.classList.toggle("ri-arrow-up-s-line");
});

// Close the menu if clicked outside
document.addEventListener("click", function (event) {
  // Check if the click is outside the search input or the dropdown menu
  if (!searchMobDiv.contains(event.target) && !searchDropdown.contains(event.target)) {
    searchDropdown.classList.remove("show");
    changeIcon.classList.remove("ri-arrow-up-s-line"); // Reset the icon
  }
});

// Fetch the data from the local JSON file
fetch('/navbar/json/cities.json')
  .then(response => response.json())  // Parse the JSON data
  .then(data => {
    const jsonData = data.cities;  // Assuming the structure of data is { cities: [...] }

    // Loop through the cities and create list items
    jsonData.forEach(curElem => {
      const listItem = document.createElement('li');
      listItem.classList.add('search-content-item');
      listItem.textContent = curElem;  // Assuming curElem has a 'name' property
      // Append the list item to the menu content list
      searchMenuContent.appendChild(listItem);
      listItem.style.listStyle = "none";
    });
  })
  .catch(error => console.error('Error:', error));




// --------------hero slider--------------
/*=============== SWIPER slider ===============*/
const sliderSwiper = new Swiper(".hero-slider", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});


// --------------health slider swiper------
var healthSwiper = new Swiper(".health__container", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      // spaceBetween: 56,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 56,
    },
  },
});


// --------------health concern slider swiper------
var healthConcern = new Swiper(".health-concern", {
  loop: true,
  spaceBetween: 20, // Default space between slides
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // For large screens (1200px and above)
    1200: {
      slidesPerView: 5,
      spaceBetween: 40, // Adjust spacing for larger screens
    },
    // For medium screens (968px to 1199px)
    968: {
      slidesPerView: 4,
      spaceBetween: 30, // Adjust spacing for medium screens
    },
    // For small screens (768px to 967px)
    768: {
      slidesPerView: 3,
      spaceBetween: 20, // Adjust spacing for small screens
    },
    // For very small screens (below 768px)
    0: {
      slidesPerView: 2, // Default 2 slides per view on small screens
      spaceBetween: 15, // Less space between slides on small screens
    },
  },
});


// --------------promotion slider swiper------
var promotionSwiper = new Swiper(".promotion-container", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      // spaceBetween: 56,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 56,
    },
  },
});




// --------------blogs slider swiper------
var blogSwiper = new Swiper(".blogs-container", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      // spaceBetween: 56,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 56,
    },
  },
});


// -----------accordian-------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Get the currently open panel
    var currentPanel = document.querySelector(".accordion.active");
    var currentContent = currentPanel ? currentPanel.nextElementSibling : null;
    var currentArrow = currentPanel ? currentPanel.querySelector(".arrow-icon") : null;

    // If there is an open panel, close it
    if (currentPanel && currentPanel !== this) {
      currentPanel.classList.remove("active");
      currentContent.style.display = "none";

      // Change the arrow to down if it's closing
      if (currentArrow) {
        currentArrow.classList.remove("ri-arrow-up-s-line");
        currentArrow.classList.add("ri-arrow-down-s-line");
      }
    }

    // Toggle the clicked panel
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";

      // Change the arrow to down when panel is closed
      var arrow = this.querySelector(".arrow-icon");
      if (arrow) {
        arrow.classList.remove("ri-arrow-up-s-line");
        arrow.classList.add("ri-arrow-down-s-line");
      }
    } else {
      panel.style.display = "block";

      // Change the arrow to up when panel is open
      var arrow = this.querySelector(".arrow-icon");
      if (arrow) {
        arrow.classList.remove("ri-arrow-down-s-line");
        arrow.classList.add("ri-arrow-up-s-line");
      }
    }
  });
}

// ------------accordian for opened-----------
var openedacc = document.getElementsByClassName("opened-accordian");
var i;

// Initially open the first panel
if (openedacc.length > 0) {
  openedacc[0].classList.add("active"); // Add the active class to the first panel
  var firstPanel = openedacc[0].nextElementSibling;
  if (firstPanel) {
    firstPanel.style.display = "block"; // Show the first panel's content
    var firstArrow = openedacc[0].querySelector(".opened-arrow-icon");
    if (firstArrow) {
      firstArrow.classList.remove("ri-arrow-down-s-line");
      firstArrow.classList.add("ri-arrow-up-s-line");
    }
  }
}

for (i = 0; i < openedacc.length; i++) {
  openedacc[i].addEventListener("click", function () {
    // Get the currently open panel
    var currentPanel = document.querySelector(".opened-accordion.active");
    var currentContent = currentPanel ? currentPanel.nextElementSibling : null;
    var currentArrow = currentPanel ? currentPanel.querySelector(".opened-arrow-icon") : null;

    // If there is an open panel, close it
    if (currentPanel && currentPanel !== this) {
      currentPanel.classList.remove("active");
      currentContent.style.display = "none";

      // Change the arrow to down if it's closing
      if (currentArrow) {
        currentArrow.classList.remove("ri-arrow-up-s-line");
        currentArrow.classList.add("ri-arrow-down-s-line");
      }
    }

    // Toggle the clicked panel
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";

      // Change the arrow to down when panel is closed
      var arrow = this.querySelector(".opened-arrow-icon");
      if (arrow) {
        arrow.classList.remove("ri-arrow-up-s-line");
        arrow.classList.add("ri-arrow-down-s-line");
      }
    } else {
      panel.style.display = "block";

      // Change the arrow to up when panel is open
      var arrow = this.querySelector(".opened-arrow-icon");
      if (arrow) {
        arrow.classList.remove("ri-arrow-down-s-line");
        arrow.classList.add("ri-arrow-up-s-line");
      }
    }
  });
}
