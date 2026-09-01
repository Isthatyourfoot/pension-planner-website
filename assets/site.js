const button = document.querySelector('.menu-button');
const links = document.querySelector('.nav-links');
if (button && links) {
  button.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links?.classList.remove('open'));
});
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
