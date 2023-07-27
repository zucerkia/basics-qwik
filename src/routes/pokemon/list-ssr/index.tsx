import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <span>hola mundo SSR</span>;
});

export const head: DocumentHead = {
  title: "List SSR",
  meta: [
    {
      name: "description",
      content: "Lista en el Servidor",
    },
  ],
};
