import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';

new SlimSelect({
  select: '#selectElement',
});

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
  catsInfo: document.querySelector('.cat-info'),
};
// console.log(refs.select);
// console.log(refs.loader);
// console.log(refs.error);
// console.log(refs.catsInfo);

refs.select.addEventListener('change', selectFromList);

function selectFromList(event) {
  fetchBreeds()
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
  //   const breedId = event.currentTarget.value;

  console.log(event);
}
selectFromList();
// refs.catsInfo.insertAdjacentHTML("beforeend", createCardMarkup(data.results));

function createCardMarkup(url, breeds) {
  const { image, name, temperament, description } = breeds[0];

  return `
<img src="${url}" alt="${name}" width="400">
<h2>${name}</h2>
<p>${temperament}</p>
<p>${description}</p>
`;
}

// fetchBreeds()
//   .then((response) => {
//     console.log(response.data);})
//   .catch(error => console.log(error));

// fetchCatByBreed()
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error));

console.log(10);
