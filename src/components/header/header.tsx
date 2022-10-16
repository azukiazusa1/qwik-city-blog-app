import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./header.css?inline";

type NavItemProps = {
  href: string;
  label: string;
};

export const NavItem = component$(({ href, label }: NavItemProps) => {
  useStylesScoped$(`
    li {
      display: inline-block;
      margin: 0;
      padding: 15px 10px;
    }
  `);

  return (
    <li>
      <Link class="nav-item" href={href}>
        {label}
      </Link>
    </li>
  );
});

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/contact" label="Contact" />
      </ul>
    </header>
  );
});
