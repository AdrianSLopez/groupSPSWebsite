const menuToggle = document.querySelector('.toggle');
const content = document.querySelector('.navBar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  content.classList.toggle('active');
  
})
