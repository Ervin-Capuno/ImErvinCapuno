const toggleButton = document.getElementById("toggleButton");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-list a");


toggleButton.addEventListener("click", function() {
    sidebar.classList.toggle("active");
    toggleButton.classList.toggle("active");

});

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        sidebar.classList.remove("active");
        toggleButton.classList.remove("active");

    });
});


