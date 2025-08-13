// Responsive Menus

// Select Elements

const dropdownMenus = document.querySelectorAll(".dropdown");
const navBtn = document.querySelector(".nav-menu");
const navMenu = document.querySelector(".nav");

// Dropdown
dropdownMenus.forEach((item) => {
  item.addEventListener("click", function (e) {
    const dropdown = e.currentTarget;
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    dropdownMenu.classList.toggle("active");
    console.log(dropdown, dropdownMenu);
  });
});

// Mobile Nav Menu
navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// Scroll Document
document.addEventListener("scroll", function (e) {
  // console.log("SCROLL", e.scro                                 );
});
