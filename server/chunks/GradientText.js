import { c as create_ssr_component } from "./ssr.js";
const GradientText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<span class="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">${slots.default ? slots.default({}) : ``}</span>`;
});
export {
  GradientText as G
};
