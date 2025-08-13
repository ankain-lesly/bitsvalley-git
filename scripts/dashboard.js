const sidebarEl = document.querySelector(".sidebar");
const sidebarBtnEl = document.querySelector(".sidebar-btn");
const sidebarBtnCloseEl = document.querySelector(".sidebar-close");

sidebarBtnEl.addEventListener("click", function () {
  sidebarEl.classList.toggle("active");
});

sidebarBtnCloseEl.addEventListener("click", function () {
  if (sidebarEl.classList.contains("active")) {
    sidebarEl.classList.toggle("active");
  } else {
  }
});
