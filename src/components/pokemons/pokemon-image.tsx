import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number | string;
  size?: number;
  backImage?: boolean;
  isVisible?: boolean;
}

const IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export const PokemonImage = component$(
  ({ id, size = 200, backImage = false, isVisible = true }: Props) => {
    const pokemonImage = backImage ? `${IMAGE_URL}/back` : IMAGE_URL;
    const isLoaded = useSignal(false);

    // Efecto secundario
    useTask$(({ track }) => {
      track(() => id);
      isLoaded.value = false;
    });

    return (
      <div
        class="flex justify-center items-center"
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {!isLoaded.value && <span>loading...</span>}
        <img
          onLoad$={() => {
            isLoaded.value = true;
          }}
          class={{
            hidden: !isLoaded.value,
            "brightness-0": !isVisible,
          }}
          src={`${pokemonImage}/${id}.png`}
          alt="pokemon"
          width={size}
          height={size}
        />
      </div>
    );
  }
);
