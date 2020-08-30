var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal button');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

modalNoButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open')
  closeModal();
});


function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open'; //This will actually overwrite the complete class list
    // backdrop.className = 'open'; //This will actually overwrite the complete class list
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open')
  backdrop.classList.add('open')
});
