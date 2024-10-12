import { writable } from "svelte/store";

export const styleStore = writable({
  className: "Default"
});

export const darkModeStore = writable(false);