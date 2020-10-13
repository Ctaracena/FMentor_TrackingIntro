const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')


const menuOn = () => {
  hamburger.src = 'images/icon-close.svg'
  mobileMenu.style.display = 'flex'
}

const menuOff = () => {
  hamburger.src = 'images/icon-hamburger.svg'
  mobileMenu.style.display = 'none'
}

mobileMenu.style.display = 'none'
hamburger.addEventListener('click', () => {
  if (mobileMenu.style.display === 'none') {
    menuOn()
  } else {
    menuOff()
  }
})