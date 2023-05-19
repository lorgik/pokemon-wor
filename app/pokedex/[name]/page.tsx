import styles from './styles.module.scss';
import { Metadata } from 'next';
import { ucFirst } from '@/global/functions';

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  return {
    title: ucFirst(name),
  };
}

async function getData(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
}

const PokemonPage = async ({ params: { name } }: Props) => {
  const pokemon = await getData(name);

  const type = pokemon.types[0].type.name;

  return (
    <div className={styles.page}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${pokemon.sprites.other.dream_world.front_default})`,
        }}
      >
        <h3 className={styles.title}>№{pokemon.id}</h3>
        <h3 className={`${styles.name} ${type}`}>{ucFirst(pokemon.name)}</h3>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Information</h3>
        <div className={styles.feature}>
          <div className={styles.ability}>
            {pokemon.abilities.map((abilities: any, index: number) => (
              <div className={styles.hidden} key={index}>
                <p className={styles.title}>
                  {abilities.is_hidden ? 'Hidden' : 'Visible'} ability
                </p>
                <span className={styles.value}>
                  {ucFirst(abilities.ability.name)}
                </span>
              </div>
            ))}
          </div>
          <ul className={styles.stats}>
            <li className={styles.stat}>
              <span>{ucFirst(pokemon.stats[0].stat.name)}</span>
              <span>{ucFirst(pokemon.stats[0].base_stat)}</span>
            </li>
            <li className={styles.stat}>
              <span>{ucFirst(pokemon.stats[1].stat.name)}</span>
              <span>{ucFirst(pokemon.stats[1].base_stat)}</span>
            </li>
            <li className={styles.stat}>
              <span>{ucFirst(pokemon.stats[2].stat.name)}</span>
              <span>{ucFirst(pokemon.stats[2].base_stat)}</span>
            </li>
            <li className={styles.stat}>
              <span>{ucFirst(pokemon.stats[3].stat.name)}</span>
              <span>{ucFirst(pokemon.stats[3].base_stat)}</span>
            </li>
            <li className={styles.stat}>
              <span>{ucFirst(pokemon.stats[4].stat.name)}</span>
              <span>{ucFirst(pokemon.stats[4].base_stat)}</span>
            </li>
            <li className={styles.stat}>
              <span>{ucFirst(pokemon.stats[5].stat.name)}</span>
              <span>{ucFirst(pokemon.stats[5].base_stat)}</span>
            </li>
          </ul>
          <p className={`${styles.type} ${type}`}>
            Type - {ucFirst(pokemon.types[0].type.name)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
