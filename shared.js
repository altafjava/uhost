var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal button');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

backdrop.addEventListener('click', function () {
  mobileNav.style.display = 'none';
  closeModal();
});
modalNoButton.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

toggleButton.addEventListener('click', function () {
  mobileNav.style.display = 'block';
  backdrop.style.display='block'
});
