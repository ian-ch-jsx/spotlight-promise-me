export const fetchFilms = () => {
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((data) => data.json())
    .then((response) => {
      console.log('then films', response);
    });
};

export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  console.log('async films', data);
}

export const fetchCharacters = () => {
  fetch('https://ghibliapi.herokuapp.com/people')
    .then((data) => data.json())
    .then((response) => {
      const characterNames = response.map((characterName) => ({
        name: characterName.name,
      }));
      console.log('character names', characterNames);
    });
};

export async function totoroCharacters() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/people');
  const data = await resp.json();
  console.log('characters', data);
  const allCharacters = data.map((character) => ({
    characters: character.name,
  }));
  const totoroCharacters = allCharacters.filter(
    (allCharacters) =>
      allCharacters.films ==
      'https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49'
  );
  console.log('crappity crap', totoroCharacters);
}
