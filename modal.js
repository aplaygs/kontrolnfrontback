document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('callMeBtn');
  const modal = document.getElementById('callModal');
  const closeBtn = document.getElementById('callModalClose');

  if (!openBtn || !modal || !closeBtn) return;

  const openModal = () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    openBtn.dataset.returnFocus = '1';
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (openBtn.dataset.returnFocus) openBtn.focus();
  };

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  // Закрытие по клику на подложку
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Закрытие по Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});

// modal.js — дополнение
const openModal = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; closeBtn.focus(); };
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; };
