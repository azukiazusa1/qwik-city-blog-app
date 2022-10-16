import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./form.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <form method="post">
      <label for="name">Name</label>
      <input id="name" name="name" type="text" />
      <label for="email">Email</label>
      <input id="email" name="email" type="email" />
      <label for="message">Message</label>
      <textarea id="message" name="message" />
      <button type="submit">Send</button>
    </form>
  );
});
