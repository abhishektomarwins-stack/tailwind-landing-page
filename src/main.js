import "@fortawesome/fontawesome-free/css/all.min.css";
import "./variables.css";

const btn = document.getElementById('mobileMenuButton');
const menu = document.getElementById('mobileMenu');

btn?.addEventListener('click', () => {
  const isOpen = !menu.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', isOpen);
  btn.querySelector('i').className = isOpen
    ? 'fa-solid fa-xmark text-lg'
    : 'fa-solid fa-bars text-lg';
});