(() => {
  const openBtn = document.querySelector('.hero-btn');
  const backdrop = document.querySelector('.backdrop');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (!openBtn || !backdrop || !closeBtn) return;

  function openModal() {
    backdrop.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

  // открыть модалку
  openBtn.addEventListener('click', openModal);

  // закрыть по кнопке
  closeBtn.addEventListener('click', closeModal);

  // закрыть по клику на фон
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  // закрыть по Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !backdrop.classList.contains('is-hidden')) {
      closeModal();
    }
  });
})();
