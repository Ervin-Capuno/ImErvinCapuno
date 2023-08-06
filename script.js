const toggleButton = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-list a");
const mainContent = document.querySelector(".main-content");

toggleButton.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    toggleButton.classList.toggle("active");
    mainContent.classList.toggle("slide-down", sidebar.classList.contains("active"));
});

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        sidebar.classList.remove("active");
        toggleButton.classList.remove("active");
        mainContent.classList.remove("slide-down");
    });
});

