function main() {
  const cardEl = document.querySelector('.card');
  const arrowDownEl = document.querySelector('.fab');
  const eyeEl = document.querySelector('.fa-eye');
  const heartEl = document.querySelector('.fa-heart-o');
  const letterEl = document.querySelector('.fa-envelope-o');
  const shareEl = document.querySelector('.fa-share-alt');

  arrowDownEl.addEventListener('click', () => {
    cardEl.classList.add('transition-down');

    setTimeout(() => {
      cardEl.classList.remove('transition-down');
    }, 1000);
  });

  eyeEl.addEventListener('click', () => {
    cardEl.classList.add('animation-down');

    setTimeout(() => {
      cardEl.classList.remove('animation-down');
    }, 3000);
  });

  heartEl.addEventListener('click', () => {
    cardEl.classList.add('scale-skew');

    setTimeout(() => {
      cardEl.classList.remove('scale-skew');
    }, 2000);
  });

  letterEl.addEventListener('click', () => {
    cardEl.classList.add('send');

    setTimeout(() => {
      cardEl.classList.remove('send');
    }, 2000);
  });

  shareEl.addEventListener('click', () => {
    cardEl.classList.add('share');

    setTimeout(() => {
      cardEl.classList.remove('share');
    }, 4000);
  });
}

window.addEventListener('load', main);
