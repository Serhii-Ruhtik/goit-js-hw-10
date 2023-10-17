import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
// all modules
import Notiflix from 'notiflix';



// new SlimSelect({
//   select: '#selectElement',
// });

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catsInfo: document.querySelector('.cat-info'),
};
const arrCatInfo = [];

refs.select.addEventListener('change', selectFromList);
refs.catsInfo.classList.add('is-hidden');

fetchBreeds()
  .then(response => {
    response.data.map(breed => {
      arrCatInfo.push({ text: breed.name, value: breed.id });
    });
    
    new SlimSelect({
      select: '.breed-select',
      data: arrCatInfo,
    });
    refs.loader.classList.add("is-hidden");
  })
  .catch(setError);

function selectFromList(event) {
  const catId = event.currentTarget.selectedIndex;
  const breedId = event.currentTarget[catId].value;
  refs.loader.classList.remove("is-hidden");
  refs.catsInfo.classList.add('is-hidden');
  refs.catsInfo.innerHTML = "";
  fetchCatByBreed(breedId).then(response => {
    refs.catsInfo.innerHTML = createCardMarkup(response.data[0]);
    refs.catsInfo.classList.remove('is-hidden');
    refs.loader.classList.add("is-hidden");
  })
  .catch(setError)
}

function createCardMarkup({ url, breeds }) {
  const { name, temperament, description } = breeds[0];

  return `
<img src="${url}" alt="${name}" width="400">
<h2>${name}</h2>
<p>${description}</p>
<p><b>temperament:</b> ${temperament}</p>
`;
}

function setError(error) {
  refs.catsInfo.classList.add('is-hidden');
  refs.loader.classList.add("is-hidden");
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page or select another cat breed!'
  );
}
