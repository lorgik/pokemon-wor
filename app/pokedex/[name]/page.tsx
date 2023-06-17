import { Metadata } from 'next';
import { capitalize } from '@/global/functions';

import CardTitle from '@/components/CardTitle';

import styles from './styles.module.scss';

type Props = {
  params: {
    name: string;
  };
};

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  return {
    title: capitalize(name),
  };
}

async function getPokemon(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
}

const PokemonPage = async ({ params: { name } }: Props) => {
  const pokemon = await getPokemon(name);

  return (
    <main className={styles.page}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${pokemon.sprites.other['official-artwork'].front_default})`,
        }}
      >
        <CardTitle styles={styles} id={pokemon.id} />
        <h3 className={`${styles.name} ${pokemon.types[0].type.name}`}>
          {capitalize(pokemon.name)}
        </h3>
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>Информация</h3>
        <div className={styles.feature}>
          <div className={styles.ability}>
            {pokemon.abilities.map((abilities: any, index: number) => (
              <div className={styles.hidden} key={index}>
                <p className={styles.title}>
                  {abilities.is_hidden ? 'Скрытая' : 'Видимая'} способность
                </p>
                <span className={styles.value}>
                  {capitalize(abilities.ability.name)}
                </span>
              </div>
            ))}
          </div>
          <ul className={styles.stats}>
            {pokemon.stats.map((stats: any, index: number) => (
              <li className={styles.stat} key={index}>
                <span>{capitalize(stats.stat.name)}</span>
                <span>{stats.base_stat}</span>
              </li>
            ))}
          </ul>
          <p
            className={`${styles.type} ${
              pokemon.types[1]?.type.name
                ? pokemon.types[1].type.name
                : pokemon.types[0].type.name
            }`}
          >
            Тип
            {pokemon.types.map((types: any, index: number) => (
              <span key={index}> | {capitalize(types.type.name)}</span>
            ))}
          </p>
        </div>
      </div>
    </main>
  );
};

export default PokemonPage;
