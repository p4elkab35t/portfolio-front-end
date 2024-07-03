import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colorClasses;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { currentLink = false } = $$props;
  let { link = "#" } = $$props;
  console.log(link, $page.url.pathname, currentLink);
  if ($$props.currentLink === void 0 && $$bindings.currentLink && currentLink !== void 0) $$bindings.currentLink(currentLink);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  currentLink = link === $page.url.pathname;
  colorClasses = currentLink ? "bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent pointer-events-none uppercase" : "text-white";
  $$unsubscribe_page();
  return `<a${add_attribute("href", link, 0)} class="${"relative font-semibold text-3xl w-40 text-center " + escape(colorClasses, true) + " hover:after:w-3/4 hover:after:left-[12.5%] after:transition-all after:absolute after:left-1/2 after:top-full after:w-0 after:h-[2px] after:bg-white"}">${slots.default ? slots.default({}) : ``}</a>`;
});
const SiteNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkObj } = $$props;
  if ($$props.linkObj === void 0 && $$bindings.linkObj && linkObj !== void 0) $$bindings.linkObj(linkObj);
  return `<div class="flex flex-row justify-around w-3/5 fixed left-1/2 -translate-x-2/4 top-10 z-50">${each(linkObj, (link) => {
    return `${validate_component(LinkButton, "LinkButton").$$render(
      $$result,
      {
        link: link.URL,
        currentLink: link.currentLink
      },
      {},
      {
        default: () => {
          return `${escape(link.text)} `;
        }
      }
    )}`;
  })}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.pathname;
  let linkObj = [
    { text: "ME", URL: "/", currentLink: false },
    {
      text: "Projects",
      URL: "/projects",
      currentLink: false
    },
    {
      text: "Contact",
      URL: "/contact",
      currentLink: false
    },
    {
      text: "Train",
      URL: "/train",
      currentLink: false
    }
  ];
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-12qabvc_START --><link rel="icon" href="/icon/favicon.ico"><!-- HEAD_svelte-12qabvc_END -->`, ""} ${validate_component(SiteNav, "SiteNav").$$render($$result, { linkObj }, {}, {})} <div class="w-screen h-screen flex flex-col items-center justify-center">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
