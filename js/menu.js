const btn = document.querySelector('#menu-btn');
const menu = document.getElementById('menu')

function navToggle() {
  // btn.classList.toggle('open');
  menu.classList.toggle('hidden')
}

btn.addEventListener('click', navToggle)

document.addEventListener('click', (e) => {
  if(!e.target.closest("#menu") && !e.target.matches("#menu-btn")) {
    menu.classList.add('hidden')
  }

})

window.addEventListener('scroll', function() {
  const element = document.querySelector('.header__logo');
  if (window.scrollY > 400) {
    element.classList.add('header__logo--hidden');
  } else {
    element.classList.remove('header__logo--hidden');
  }
});