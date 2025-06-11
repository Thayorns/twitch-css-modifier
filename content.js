function applyStyles() {
    const overlayElements = document.querySelectorAll('.bmlSdB, .player-overlay-background--darkness-3');
    overlayElements.forEach(el => {
      if (el.classList.contains('bmlSdB')) {
        el.style.setProperty('display', 'none', 'important');
      } else if (el.classList.contains('player-overlay-background--darkness-3')) {
        el.style.setProperty('background', 'none', 'important');
      }
    });
}
  applyStyles();
  
  const observer = new MutationObserver(applyStyles);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });