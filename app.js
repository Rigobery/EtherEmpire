document.addEventListener('DOMContentLoaded', function () {
  const starsContainer = document.querySelector('.stars');

  for (let i = 0; i < 100; i++) {
      createStar();
  }

  function createStar() {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 2}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      starsContainer.appendChild(star);
  }
});
