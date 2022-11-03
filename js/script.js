const tooltips = document.querySelectorAll('.swatch');
const img = document.querySelector('.tooltip-img');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('click', () => {
    if(!tooltip.classList.contains('active')){
      let colorNameClass = tooltip.classList[0];
      setNewColor(colorNameClass);
    }
  });
});

function setNewColor(tooltip) {
  img.src = `img/${tooltip}.webp`;
};