(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const links = document.querySelectorAll('a[href="#inscricao"]');
  const offer = document.getElementById('inscricao');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      if (!offer) return;
      event.preventDefault();
      window.history.pushState(null, '', '#inscricao');
      offer.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
      offer.focus({ preventScroll: true });
    });
  });
})();
