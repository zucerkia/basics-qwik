import { component$ } from "@builder.io/qwik";
import { useLocation, routeLoader$ } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export const usePokemonId = routeLoader$<number>(({ params, redirect }) => {
  const id = Number(params.id);

  if (isNaN(id)) {
    redirect(301, "/");
    console.log("nan");
  }
  return id;
});

export default component$(() => {
  const pokemonId = usePokemonId();

  return (
    <>
      <h1>Pokemon: {pokemonId}</h1>
      <PokemonImage id={pokemonId.value} />
    </>
  );
});
