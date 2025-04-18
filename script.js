document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('menu-toggle').ariaExpanded = 
    document.getElementById('menu-toggle').ariaExpanded == "true" ? "false" : "true";
});