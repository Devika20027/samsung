document.addEventListener('DOMContentLoaded', function() {
    var shopLink = document.getElementById('shop-link');
    var aiLink = document.getElementById('ai-link');
    var mobLink = document.getElementById('mob-link');
    var tvLink = document.getElementById('tv-link');
    var homeLink = document.getElementById('home-link');
    var computeLink = document.getElementById('compute-link');
    var displayLink = document.getElementById('display-link');
    var acLink = document.getElementById('ac-link');
    var supportLink = document.getElementById('support-link'); // Add support link reference

    var shopDropdown = document.getElementById('shop-dropdown');
    var aiDropdown = document.getElementById('ai-dropdown');
    var mobDropdown = document.getElementById('mob-dropdown');
    var tvDropdown = document.getElementById('tv-dropdown');
    var homeDropdown = document.getElementById('home-dropdown');
    var computeDropdown = document.getElementById('compute-dropdown');
    var displayDropdown = document.getElementById('display-dropdown');
    var acDropdown = document.getElementById('ac-dropdown');
    var supportDropdown = document.getElementById('support-dropdown'); // Add support dropdown reference

    var shopDropSect = document.querySelector('#shop-dropdown .dropdown-cont');
    var aiDropSect = document.querySelector('#ai-dropdown .dropdowne-cont');
    var mobDropSect = document.querySelector('#mob-dropdown .dropdown-mob-cont');
    var tvDropSect = document.querySelector('#tv-dropdown .dropdown-tv-cont');
    var homeDropSect = document.querySelector('#home-dropdown .dropdown-home-cont');
    var computeDropSect = document.querySelector('#compute-dropdown .dropdown-compute-cont');
    var displayDropSect = document.querySelector('#display-dropdown .dropdown-display-cont');
    var acDropSect = document.querySelector('#ac-dropdown .dropdown-ac-cont');
    var supportDropSect = document.querySelector('#support-dropdown .dropdown-support-cont'); // Add support dropdown content reference

    var header = document.querySelector('.head-main');



    // Function to check if an element is within another element
    function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    // Show dropdown on mouseover
    shopLink.addEventListener('mouseover', function() {
        shopDropdown.classList.add('show');
    });
    aiLink.addEventListener('mouseover', function() {
        aiDropdown.classList.add('show');
    });
    mobLink.addEventListener('mouseover', function() {
        mobDropdown.classList.add('show');
    });
    tvLink.addEventListener('mouseover', function() {
        tvDropdown.classList.add('show');
    });
    homeLink.addEventListener('mouseover', function() {
        homeDropdown.classList.add('show');
    });
    computeLink.addEventListener('mouseover', function() {
        computeDropdown.classList.add('show');
    });
    displayLink.addEventListener('mouseover', function() {
        displayDropdown.classList.add('show');
    });
    acLink.addEventListener('mouseover', function() {
        acDropdown.classList.add('show');
    });
    supportLink.addEventListener('mouseover', function() { // Add event listener for support link
        supportDropdown.classList.add('show');
    });

    // Keep dropdown visible when mouse is over the dropdown content
    shopDropSect.addEventListener('mouseover', function() {
        shopDropdown.classList.add('show');
    });
    aiDropSect.addEventListener('mouseover', function() {
        aiDropdown.classList.add('show');
    });
    mobDropSect.addEventListener('mouseover', function() {
        mobDropdown.classList.add('show');
    });
    tvDropSect.addEventListener('mouseover', function() {
        tvDropdown.classList.add('show');
    });
    homeDropSect.addEventListener('mouseover', function() {
        homeDropdown.classList.add('show');
    });
    computeDropSect.addEventListener('mouseover', function() {
        computeDropdown.classList.add('show');
    });
    displayDropSect.addEventListener('mouseover', function() {
        displayDropdown.classList.add('show');
    });
    acDropSect.addEventListener('mouseover', function() {
        acDropdown.classList.add('show');
    });
    supportDropSect.addEventListener('mouseover', function() { // Add event listener for support dropdown content
        supportDropdown.classList.add('show');
    });

    // Hide dropdown on mouseout from links and dropdowns
    shopDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(shopLink, event.relatedTarget)) {
            shopDropdown.classList.remove('show');
        }
    });
    aiDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(aiLink, event.relatedTarget)) {
            aiDropdown.classList.remove('show');
        }
    });
    mobDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(mobLink, event.relatedTarget)) {
            mobDropdown.classList.remove('show');
        }
    });
    tvDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(tvLink, event.relatedTarget)) {
            tvDropdown.classList.remove('show');
        }
    });
    homeDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(homeLink, event.relatedTarget)) {
            homeDropdown.classList.remove('show');
        }
    });
    computeDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(computeLink, event.relatedTarget)) {
            computeDropdown.classList.remove('show');
        }
    });
    displayDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(displayLink, event.relatedTarget)) {
            displayDropdown.classList.remove('show');
        }
    });
    acDropdown.addEventListener('mouseout', function(event) {
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(acLink, event.relatedTarget)) {
            acDropdown.classList.remove('show');
        }
    });
    supportDropdown.addEventListener('mouseout', function(event) { // Add event listener for support dropdown
        if (!isDescendant(this, event.relatedTarget) && !isDescendant(supportLink, event.relatedTarget)) {
            supportDropdown.classList.remove('show');
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('mouseout', function(event) {
        if (!aiLink.contains(event.target) && !aiDropdown.contains(event.target)) {
            aiDropdown.classList.remove('show');
        }
        if (!shopLink.contains(event.target) && !shopDropdown.contains(event.target)) {
            shopDropdown.classList.remove('show');
        }
        if (!mobLink.contains(event.target) && !mobDropdown.contains(event.target)) {
            mobDropdown.classList.remove('show');
        }
        if (!tvLink.contains(event.target) && !tvDropdown.contains(event.target)) {
            tvDropdown.classList.remove('show');
        }
        if (!homeLink.contains(event.target) && !homeDropdown.contains(event.target)) {
            homeDropdown.classList.remove('show');
        }
        if (!computeLink.contains(event.target) && !computeDropdown.contains(event.target)) {
            computeDropdown.classList.remove('show');
        }
        if (!displayLink.contains(event.target) && !displayDropdown.contains(event.target)) {
            displayDropdown.classList.remove('show');
        }
        if (!acLink.contains(event.target) && !acDropdown.contains(event.target)) {
            acDropdown.classList.remove('show');
        }
        if (!supportLink.contains(event.target) && !supportDropdown.contains(event.target)) { // Add check for support dropdown
            supportDropdown.classList.remove('show');
        }
    });

    // Hide dropdown when mouse leaves header
    header.addEventListener('mouseleave', function(event) {
        shopDropdown.classList.remove('show');
        aiDropdown.classList.remove('show');
        mobDropdown.classList.remove('show');
        tvDropdown.classList.remove('show');
        homeDropdown.classList.remove('show');
        computeDropdown.classList.remove('show');
        displayDropdown.classList.remove('show');
        acDropdown.classList.remove('show');
        supportDropdown.classList.remove('show'); // Add support dropdown remove class
    });
});




