console.log(10);

fetch('https://rickandmortyapi.com/api/character')
  .then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`Вимушена помилка статусу: ${response.status}`);
      
    }
    // console.log(response.json());
    return response.json();
  })
  .then(data => console.log(data))
  .catch((err) => console.log(err));
