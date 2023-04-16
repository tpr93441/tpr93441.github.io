const overlays = document.querySelectorAll('.overlay');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;
let dots = [];

function switchOverlay(index) {
  overlays.forEach(overlay => overlay.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  overlays[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

function createDots() {
  for (let i = 0; i < overlays.length; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => switchOverlay(i));
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }
}

function autoRotate() {
  currentIndex++;
  if (currentIndex >= overlays.length) {
    currentIndex = 0;
  }
  switchOverlay(currentIndex);
}

createDots();
const autoRotateInterval = setInterval(autoRotate, 3000); // Change 3000 to the desired rotation interval in milliseconds

prevBtn.addEventListener('click', () => {
  clearInterval(autoRotateInterval);
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = overlays.length - 1;
  }
  switchOverlay(currentIndex);
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoRotateInterval);
  autoRotate();
});
