document.addEventListener('DOMContentLoaded', function() {
  var sideMenu = document.getElementById('sideMenu');
  var openButton = document.getElementById('openMenu');
  var closeButton = document.getElementById('closeMenu');

  if (sideMenu && openButton && closeButton) {
    openButton.addEventListener('click', function() {
      sideMenu.classList.add('open');
    });

    closeButton.addEventListener('click', function() {
      sideMenu.classList.remove('open');
    });
  }
});