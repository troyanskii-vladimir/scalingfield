

const box = document.querySelector('.box');
const cell = document.querySelector('.cell');





window.addEventListener('load', () => {
  const pageWidth = document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;

  if (pageWidth <= pageHeight) {
    box.style.width = `${0.8 * pageWidth}px`;
    box.style.height = `${0.8 * pageWidth}px`;
  } else {
    box.style.width = `${0.8 * pageHeight}px`;
    box.style.height = `${0.8 * pageHeight}px`;
  }

})


window.addEventListener('resize', () => {
  const pageWidth = document.documentElement.scrollWidth;
  const pageHeight = document.documentElement.scrollHeight;

  if (pageWidth <= pageHeight) {
    box.style.width = `${0.8 * pageWidth}px`;
    box.style.height = `${0.8 * pageWidth}px`;
  } else {
    box.style.width = `${0.8 * pageHeight}px`;
    box.style.height = `${0.8 * pageHeight}px`;
  }
})







const playingFields = box.querySelectorAll('.cell[data-field]');

playingFields.forEach((element) => {
  element.style.backgroundColor = 'green';

  element.textContent = `${element.getAttribute('data-field')}`;
})

