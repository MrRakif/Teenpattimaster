// JavaScript to handle the image click
document.getElementById('clickable-image').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    alert('Your download will start shortly.');
    console.log('Image clicked for download.');

    // Start download after a delay
    setTimeout(function() {
        window.location.href = document.getElementById('clickable-image').href;
    }, 1000); // 1 second delay
});
function toggleMenu(event) {
    const menu = document.getElementById('menu-options');
    // Toggle the display state of the menu
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block'; 
}

// Close the menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.kebab-menu')) {
        const menu = document.getElementById('menu-options');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    }
}