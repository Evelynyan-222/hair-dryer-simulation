  const panel = document.querySelector('main');
  const power = document.querySelector('#power');
  const speed = document.querySelector('#speed');
  const state = document.querySelector('#state');
  const bars = document.querySelectorAll('.meter i');
  const names = ['Off', 'Low', 'Medium', 'High'];
  let level = 0;
  let lastSpeed = 1;
  function render() {
    panel.dataset.speed = String(level);
    panel.style.setProperty('--duration', [0, 1.4, .8, .4][level] + 's');
    state.textContent = names[level];
    power.setAttribute('aria-pressed', String(level > 0));
    power.setAttribute('aria-label', level ? 'Power: turn off' : 'Power: turn on at ' + names[lastSpeed]);
    speed.disabled = level === 0;
    bars.forEach((bar, index) => bar.classList.toggle('active', index < level));
  }
  power.addEventListener('click', () => { level = level === 0 ? lastSpeed : 0; render(); });
  speed.addEventListener('click', () => {
    if (level > 0) {
      level = level % 3 + 1;
      lastSpeed = level;
    }
    render();
  });
  render();
