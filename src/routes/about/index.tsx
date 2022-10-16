import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "About ",
  meta: [
    {
      name: "description",
      content: "This is about page.",
    },
  ],
};

export default component$(() => {
  return (
    <div>
      <h1>This is about page.</h1>
    </div>
  );
});
