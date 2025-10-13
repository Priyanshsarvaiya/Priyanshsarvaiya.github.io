// Minimal, accessible enhancements for the 404 page

(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Countdown + Redirect ---------- */
  const START = 5;
  const countEl = document.getElementById('count');
  const countEl2 = document.getElementById('count2');
  const cancelBtn = document.getElementById('cancelRedirect');
  const hint = document.getElementById('hint');

  let n = START;
  let timer = null;
  const home = '/'; // GitHub Pages root

  function tick() {
    n -= 1;
    if (countEl) countEl.textContent = String(n);
    if (countEl2) countEl2.textContent = String(n);

    if (n <= 0) {
      window.location.assign(home);
    }
  }

  function start() {
    if (countEl) countEl.textContent = String(n);
    if (countEl2) countEl2.textContent = String(n);
    timer = window.setInterval(tick, 1000);
  }

  function cancel() {
    if (timer) window.clearInterval(timer);
    if (hint) hint.textContent = 'Autoredirect canceled. Use “Go Home”.';
    cancelBtn?.setAttribute('disabled', 'true');
  }

  cancelBtn?.addEventListener('click', cancel);
  start();

  /* ---------- Subtle particles canvas (disabled for reduced motion) ---------- */
  const canvas = document.getElementById('bg');
  if (!prefersReducedMotion && canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const DPR = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    let w, h, particles;

    function resize() {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      ctx.scale(DPR, DPR);
    }

    function init() {
      const count = Math.floor((w * h) / 24000); // density
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.35 + 0.15
      }));
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(255,255,255,.12)';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;

        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(step);
    }

    // handle resize
    const onResize = () => {
      resize();
      init();
    };

    resize();
    init();
    step();
    window.addEventListener('resize', onResize);
  }
})();
