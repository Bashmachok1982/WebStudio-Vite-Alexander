(function () {
  const burgerButton = document.querySelector('.menu-toggle');
  const mobileModal = document.querySelector('.mobile-menu');
  const navLinks = document.querySelectorAll('.mobile-nav a');
  const closeButton = document.querySelector('.menu-close-btn');

  function openModal() {
    mobileModal.classList.add('is-open');
  }

  function closeModal() {
    mobileModal.classList.remove('is-open');
  }

  function toggleModal() {
    mobileModal.classList.toggle('is-open');
  }

  burgerButton.addEventListener('click', toggleModal);
  closeButton.addEventListener('click', closeModal);

  navLinks.forEach(link => {
    link.addEventListener('click', closeModal);
  });
})();
