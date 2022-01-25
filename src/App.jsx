import {
  fetchFilms,
  getFilms,
  fetchCharacters,
  totoroCharacters,
} from './services/promise-me';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetchFilms();
    getFilms();
    fetchCharacters();
    totoroCharacters();
  });

  return <h1>Hello World</h1>;
}
