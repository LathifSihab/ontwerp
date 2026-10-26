// Mobiel menu
(function(){
  var btn = document.querySelector('.menu-btn'), nav = document.querySelector('.main-nav');
  function setOpen(open){
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu');
  }
  if(btn && nav){
    btn.addEventListener('click', function(){ setOpen(!nav.classList.contains('open')) });
    // Sluiten met Escape, met een klik buiten het menu, of na het kiezen van een link
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && nav.classList.contains('open')){ setOpen(false); btn.focus() }
    });
    document.addEventListener('click', function(e){
      if(nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) setOpen(false);
    });
    nav.addEventListener('click', function(e){ if(e.target.closest('a')) setOpen(false) });
    // Terug naar het brede menu: open-toestand opruimen
    var wide = window.matchMedia('(min-width:1181px)');
    (wide.addEventListener ? wide.addEventListener.bind(wide, 'change') : wide.addListener.bind(wide))(function(m){ if(m.matches) setOpen(false) });
  }
  var yr = document.getElementById('yr'); if(yr) yr.textContent = new Date().getFullYear();
})();

// Header krijgt een schaduw zodra je scrollt
(function(){
  var header = document.querySelector('.site-header'); if(!header) return;
  function update(){ header.classList.toggle('scrolled', window.scrollY > 8) }
  update(); window.addEventListener('scroll', update, {passive: true});
})();

// Elementen met data-reveal verschijnen zodra ze in beeld komen
(function(){
  var els = document.querySelectorAll('[data-reveal]');
  function done(el){
    el.classList.add('in');
    // Na het verschijnen het attribuut weghalen, zodat hover-effecten weer hun eigen timing hebben
    el.addEventListener('transitionend', function end(e){
      if(e.target !== el || e.propertyName !== 'opacity') return;
      el.removeAttribute('data-reveal'); el.removeEventListener('transitionend', end);
    });
  }
  if(!('IntersectionObserver' in window)){ els.forEach(done); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ done(e.target); io.unobserve(e.target) } });
  }, {rootMargin: '0px 0px -10% 0px', threshold: 0.12});
  els.forEach(function(el){ io.observe(el) });
})();

// Contactformulier: controle in de browser vóór verzenden
(function(){
  var form = document.getElementById('contact-form'); if(!form) return;
  var status = document.getElementById('form-status');
  function fail(field, msg){
    var wrap = field.closest('.field'); wrap.classList.add('invalid');
    var e = document.createElement('span'); e.className = 'error-msg'; e.textContent = msg; wrap.appendChild(e);
  }
  form.addEventListener('submit', function(ev){
    form.querySelectorAll('.error-msg').forEach(function(e){ e.remove() });
    form.querySelectorAll('.invalid').forEach(function(e){ e.classList.remove('invalid') });
    var bad = 0;
    form.querySelectorAll('[required]').forEach(function(f){
      if(f.type === 'checkbox'){ if(!f.checked){ bad++; fail(f, 'Ga akkoord met de privacyverklaring om het bericht te versturen.') } }
      else if(!f.value.trim()){ bad++; fail(f, 'Dit veld is verplicht.') }
      else if(f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value.trim())){ bad++; fail(f, 'Vul een geldig e-mailadres in.') }
    });
    if(bad){
      ev.preventDefault();
      status.hidden = false; status.className = 'form-status error';
      status.textContent = 'Controleer de gemarkeerde velden en probeer het opnieuw.';
      var first = form.querySelector('.invalid input, .invalid textarea'); if(first) first.focus();
      return;
    }
    // Nog geen verzendadres ingesteld (zie README): toon dit in plaats van een foutpagina.
    if(!form.getAttribute('action')){
      ev.preventDefault();
      status.hidden = false; status.className = 'form-status ok';
      status.textContent = 'Formulier is goed ingevuld. Let op: er is nog geen verzendadres ingesteld, dus er is niets verstuurd.';
    }
  });
})();
