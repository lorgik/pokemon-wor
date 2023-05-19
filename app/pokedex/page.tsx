import Link from 'next/link';
import styles from './styles.module.scss';
import { ucFirst } from '@/global/functions';

async function getData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=50');
  return response.json().then((data) => data.results);
}

type Pokemon = {
  name: string;
  url: string;
};

const Pokedex = async () => {
  const pokemons = await getData();

  return (
    <main className={styles.main}>
      {pokemons.map((pokemon: Pokemon, index: number) => (
        <Link href={`/pokedex/${pokemon.name}`} key={index}>
          <div
            className={styles.card}
            style={{
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`})`,
            }}
          >
            <h3>
              №{index + 1} {ucFirst(pokemon.name)}
            </h3>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Pokedex;
