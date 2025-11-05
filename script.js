/* script.js - interactions & simple animations */
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); nav.classList.remove('open'); }
    });
  });

  // simple hero parallax on mouse move
  const hero = document.querySelector('.hero');
  hero.addEventListener('mousemove', (e)=>{
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    hero.style.transform = `translate3d(${x*6}px, ${y*4}px, 0)`;
  });
  hero.addEventListener('mouseleave', ()=> hero.style.transform = '');

  // form submit (fake, with animation)
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMessage');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    msg.textContent = '送信中...';
    // simulate async send
    setTimeout(()=>{
      msg.textContent = '送信が完了しました。ありがとうございます！';
      form.reset();
    }, 900);
  });

  // small entrance animation for cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((c, i)=>{
    c.style.opacity = 0;
    c.style.transform = 'translateY(10px)';
    setTimeout(()=>{ c.style.transition = 'opacity .6s ease, transform .6s ease'; c.style.opacity = 1; c.style.transform = 'none'; }, 150 + i*120);
  });
});
