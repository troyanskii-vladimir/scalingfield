

const box = document.querySelector('.box');
const cell = document.querySelector('.cell');





const setGameFieldSize = () => {
    
}



window.addEventListener('load', () => {
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    
    box.style.width = `${0.8 * pageWidth}px`;
    box.style.height = `${0.8 * pageWidth}px`;    
})

window.addEventListener('resize', () => {
    const pageWidth = document.documentElement.scrollWidth;
    const pageHeight = document.documentElement.scrollHeight;
    
    box.style.width = `${0.8 * pageWidth}px`;
    box.style.height = `${0.8 * pageWidth}px`;
})
