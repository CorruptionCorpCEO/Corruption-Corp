function navigateToPage(url) {
    window.location.href = url; // Redirect to the specified page
}

document.addEventListener('DOMContentLoaded', function () {
    // Hide mobile menu when any part of the screen other than the menu is tapped
    document.addEventListener('click', function (event) {
        var menu = document.getElementById('mobile-menu');
        if (!menu.contains(event.target)) {
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        }
    });
});