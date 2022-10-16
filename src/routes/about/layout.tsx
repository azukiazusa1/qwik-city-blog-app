import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <img
        src="https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g"
        width={600}
        height={400}
        alt="Dog and woman standing next to each other looking at the landscape from a cliff"
      />
      <Slot />
    </>
  );
});
