const menuBtn = document.querySelector('.hamburger-icon');
const menuList = document.querySelector('.menu-items');
const menuItem = document.querySelectorAll('.menu-item');

menuBtn.addEventListener('click', () => {
  toggle();
})

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    if(menuBtn.classList.contains('open')){
      toggle();
    }
  })
})

function toggle() {
  menuBtn.classList.toggle('open');
  menuList.classList.toggle('open');
}