const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Scroll-triggered appear (plays once) ---------- */
function initAppear() {
  const items = document.querySelectorAll('[data-appear]');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Background videos: only play while on screen ---------- */
function initVideos() {
  const videos = document.querySelectorAll('video[data-autoplay]');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) {
          const p = target.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          target.pause();
        }
      }
    },
    { rootMargin: '200px 0px' },
  );
  videos.forEach((v) => io.observe(v));
}

/* ---------- Parallax (hero video drifts down, footer image drifts with scroll) ---------- */
function initParallax() {
  if (reduceMotion) return;
  const hero = document.querySelector('[data-parallax="hero"]');
  const footerImg = document.querySelector('[data-parallax="footer"]');
  const footer = footerImg && footerImg.closest('footer');
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;
    if (hero && y < window.innerHeight * 1.5) {
      hero.style.transform = `translate3d(0, ${Math.min(y, 512) * 0.25}px, 0)`;
    }
    if (footer) {
      const top = footer.getBoundingClientRect().top;
      if (top < window.innerHeight) {
        const offset = Math.max(0, 450 - top) * 0.111;
        footerImg.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    }
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

/* ---------- Clients ticker: constant 80px/s regardless of breakpoint ---------- */
function initTicker() {
  const track = document.querySelector('[data-ticker]');
  if (!track) return;
  const SPEED = 80;
  const measure = () => {
    const group = track.firstElementChild;
    if (!group) return;
    const width = group.getBoundingClientRect().width;
    track.style.setProperty('--ticker-distance', `${width}px`);
    track.style.setProperty('--ticker-shift', '21px');
    track.style.setProperty('--ticker-duration', `${width / SPEED}s`);
  };
  measure();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  window.addEventListener('resize', measure);
}

/* ---------- Mobile menu ---------- */
function initMenu() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  if (!header || !toggle) return;

  const setOpen = (open) => {
    header.classList.toggle('hdr--open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setOpen(!header.classList.contains('hdr--open')));
  header.querySelectorAll('[data-menu-link]').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('hdr--open')) setOpen(false);
  });
  window.matchMedia('(min-width: 720px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

/* ---------- Contact form: compose an email (no backend required) ---------- */
function initForm() {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const submit = form.querySelector('[type="submit"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(name ? `New project inquiry from ${name}` : 'New project inquiry');
    const body = encodeURIComponent(`${message}\n\n${name}${email ? ` <${email}>` : ''}`.trim());
    window.location.href = `mailto:${form.dataset.email}?subject=${subject}&body=${body}`;
    submit.value = 'THANK YOU';
    window.setTimeout(() => {
      submit.value = submit.dataset.default || 'SEND A MESSAGE';
      form.reset();
    }, 3000);
  });
}

initAppear();
initVideos();
initParallax();
initTicker();
initMenu();
initForm();
