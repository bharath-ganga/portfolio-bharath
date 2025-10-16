const text = "Full-Stack Developer • Java | Python | React | MySQL";
const tagline = document.getElementById('tagline');
let i = 0;
function typeEffect(){
    if(i < text.length){
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 70);
    }
}
document.addEventListener('DOMContentLoaded', typeEffect);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {threshold: 0.2});
document.querySelectorAll('.card').forEach(card => observer.observe(card));

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

const themeToggle = document.getElementById('themeToggle');
let dark = true;
themeToggle.addEventListener('click', () => {
    dark = !dark;
    if(!dark){
        document.body.style.background = '#f4f4f4';
        document.body.style.color = '#111827';
        themeToggle.textContent = '☀️';
    } else {
        document.body.style.background = 'linear-gradient(180deg,#05060a 0%, #071028 60%)';
        document.body.style.color = '#e6eef8';
        themeToggle.textContent = '🌙';
    }
});
