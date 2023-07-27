import { $, component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1); //primitivos
  const pokemonDirection = useSignal(false);
  const pokemonVisibility = useSignal(true);
  const nav = useNavigate();

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  const goToPokemon = $(() => {
    nav(`/pokemon/${pokemonId.value}/`);
  });

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <div onClick$={goToPokemon}>
        <PokemonImage
          isVisible={pokemonVisibility.value}
          backImage={pokemonDirection.value}
          id={pokemonId.value}
        />
      </div>
      {/* <Link href={`/pokemon/${pokemonId.value}/`}> */}
      {/* </Link> */}

      <div class="mt-2 flex gap-2">
        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary">
          Anterior
        </button>
        <button onClick$={() => changePokemonId(+1)} class="btn btn-primary">
          Siguiente
        </button>
        <button
          onClick$={() => (pokemonDirection.value = !pokemonDirection.value)}
          class="btn btn-primary"
        >
          {pokemonDirection.value ? "Front" : "Back"}
        </button>
        <button
          onClick$={() => (pokemonVisibility.value = !pokemonVisibility.value)}
          class="btn btn-primary"
        >
          {pokemonVisibility.value ? "Ocultar" : "Revelar"}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Poke qwik",
  meta: [
    {
      name: "description",
      content: "Mi primera app con Qwik",
    },
  ],
};
