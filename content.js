function applyStyles() {
    const overlayElements = document.querySelectorAll('.eSKEhN, .player-overlay-background--darkness-3');
    overlayElements.forEach(el => {
      if (el.classList.contains('eSKEhN')) {
        el.style.display = 'none';
      } else if (el.classList.contains('player-overlay-background--darkness-3')) {
        el.style.background = 'none';
      }
    });
  }
  applyStyles();
  
  const observer = new MutationObserver(applyStyles);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });