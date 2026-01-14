document.addEventListener('DOMContentLoaded',()=>{initNavigation();initSmoothScroll();initAnimations();});

function initNavigation(){const navToggle=document.querySelector('.nav-toggle');const navMenu=document.querySelector('.nav-menu');if(!navToggle||!navMenu)return;navToggle.addEventListener('click',()=>{navMenu.classList.toggle('active');navToggle.textContent=navMenu.classList.contains('active')?'✕':'☰';});document.addEventListener('click',e=>{if(!e.target.closest('.navbar')){navMenu.classList.remove('active');if(navToggle)navToggle.textContent='☰';}});const navLinks=document.querySelectorAll('.nav-link');navLinks.forEach(link=>{link.addEventListener('click',()=>{navMenu.classList.remove('active');if(navToggle)navToggle.textContent='☰';updateActiveNav(link);});});}}

function updateActiveNav(activeLink){const navLinks=document.querySelectorAll('.nav-link');navLinks.forEach(link=>link.classList.remove('active'));activeLink.classList.add('active');}

function initSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'});updateActiveNav(this);}});});}

function initAnimations(){const observerOptions={threshold:0.1,rootMargin:'0px 0px -100px 0px'};const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.style.opacity='1';entry.target.style.transform='translateY(0)';observer.unobserve(entry.target);}});},observerOptions);document.querySelectorAll('section').forEach(section=>{section.style.opacity='0';section.style.transform='translateY(20px)';section.style.transition='opacity 0.6s ease, transform 0.6s ease';observer.observe(section);});}

window.addEventListener('scroll',()=>{const navbar=document.querySelector('.navbar');if(window.scrollY>0){navbar.style.background='rgba(8,13,18,0.95)';navbar.style.boxShadow='0 8px 32px rgba(0,0,0,0.3)';}else{navbar.style.background='rgba(8,13,18,0.7)';}});

console.log('GHP Decor Website Loaded - Premium Architecture & Interior Design');
