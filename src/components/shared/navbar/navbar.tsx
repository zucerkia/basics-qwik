import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../../icons/qwik";
import styles from "./navbar.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/">
            <QwikLogo height={50} width={143} />
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/pokemon/list-ssr/">SSR-list</Link>
          </li>
          <li>
            <Link href="/pokemon/list-client/">Client-list</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
