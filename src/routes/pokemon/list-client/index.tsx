import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import styles from "../../styles.css?inline";

export default component$(() => {
  // useStyles$(styles);
  useStylesScoped$(styles);
  return <span>hola mundo client</span>;
});

export const head: DocumentHead = {
  title: "List Client",
  meta: [
    {
      name: "description",
      content: "Lista en el cliente",
    },
  ],
};
