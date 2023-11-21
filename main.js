'use strict';

// nuovo array
const arrayInput = [
  {
    immagineURL: 'img/01.jpg',
    titolo: 'Ragazzo sul lago',
    descrizione:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  },
  {
    immagineURL: 'img/02.jpg',
    titolo: 'Austria',
    descrizione:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  },
  {
    immagineURL: 'img/03.jpg',
    titolo: 'Londra',
    descrizione:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  },
  {
    immagineURL: 'img/04.jpg',
    titolo: 'Dresda',
    descrizione:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  },
  {
    immagineURL: 'img/05.jpg',
    titolo: 'Spiaggia',
    descrizione:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
  },
];

const items = document.querySelector('.items');
let currentItem = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// modifico e aggiungo i nuovi elementi
for (let i = 0; i < arrayInput.length; i++) {
  const item = document.createElement('div');
  item.classList.add('item');

  if (i === currentItem) {
    item.classList.add('active');
  }

  const img = document.createElement('img');
  img.src = arrayInput[i].immagineURL;
  img.alt = arrayInput[i].immagineURL;

  const titolo = document.createElement('h2');
  titolo.textContent = arrayInput[i].titolo;

  const descrizione = document.createElement('p');
  descrizione.textContent = arrayInput[i].descrizione;

  item.append(img, titolo, descrizione);
  items.append(item);
}

const listItem = document.querySelectorAll('.item');

prev.addEventListener('click', function () {
  console.log('clicco su foto precedente');

  listItem[currentItem].classList.remove('active');
  currentItem = (currentItem - 1 + listItem.length) % listItem.length;
  listItem[currentItem].classList.add('active');
});

next.addEventListener('click', function () {
  console.log('clicco su foto successiva');

  listItem[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % listItem.length;
  console.log(currentItem);
  listItem[currentItem].classList.add('active');
});

setInterval(function () {
  listItem[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % listItem.length;
  listItem[currentItem].classList.add('active');
}, 3000);
