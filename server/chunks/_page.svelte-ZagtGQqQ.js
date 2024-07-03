import { c as create_ssr_component, a as subscribe, b as escape, v as validate_component, d as add_attribute, e as each, f as set_store_value } from './ssr-DrBziz2r.js';
import { G as GradientText } from './GradientText-CYmjG2K1.js';
import { r as readable, w as writable } from './index-C6Eiol03.js';
import { A as AnnotationMark } from './AnnotationMark-DFsCMtSz.js';

const BlocksGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="grid grid-cols-2 grid-rows-2 max-w-[1000px] max-h-[500px] text-white gap-12"><div class="">${slots.first ? slots.first({}) : ``}</div> <div>${slots.second ? slots.second({}) : ``}</div> <div>${slots.third ? slots.third({}) : ``}</div> <div>${slots.fourth ? slots.fourth({}) : ``}</div></div>`;
});
const css$2 = {
  code: ".gradient-border.svelte-rwa4xz{border-width:2px;-o-border-image:linear-gradient(to right, #f59e0b, #f43f5e) 1;border-image:linear-gradient(to right, #f59e0b, #f43f5e) 1}",
  map: '{"version":3,"file":"GradientButton.svelte","sources":["GradientButton.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<style>\\r\\n    .gradient-border {\\r\\n      border-width: 2px;\\r\\n      -o-border-image: linear-gradient(to right, #f59e0b, #f43f5e) 1;\\r\\n         border-image: linear-gradient(to right, #f59e0b, #f43f5e) 1;\\r\\n    }\\r\\n  </style>\\r\\n\\r\\n<button class=\\"relative text-white gradient-border bg-transparent py-6 w-full font-semibold text-5xl m-auto mt-6 after:bg-gradient-to-r after:from-amber-500 after:to-rose-500 after:h-full after:w-full after:absolute after:-top-0 after:-left-full hover:after:translate-x-full after:-z-10 after:transition-all overflow-clip\\">\\r\\n    <slot />\\r\\n</button>"],"names":[],"mappings":"AAKI,8BAAiB,CACf,YAAY,CAAE,GAAG,CACjB,eAAe,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,CAC3D,YAAY,CAAE,gBAAgB,EAAE,CAAC,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAAC,CAC/D"}'
};
const GradientButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<button class="relative text-white gradient-border bg-transparent py-6 w-full font-semibold text-5xl m-auto mt-6 after:bg-gradient-to-r after:from-amber-500 after:to-rose-500 after:h-full after:w-full after:absolute after:-top-0 after:-left-full hover:after:translate-x-full after:-z-10 after:transition-all overflow-clip svelte-rwa4xz">${slots.default ? slots.default({}) : ``}</button>`;
});
const css$1 = {
  code: ".page.svelte-1yvz3mj{min-width:100vw}@keyframes svelte-1yvz3mj-slidDownIn{from{transform:translateY(-100%)}to{transform:translateY(0)}}.isInvisible.svelte-1yvz3mj{animation:none;opacity:0}.isVisible.svelte-1yvz3mj{animation:svelte-1yvz3mj-slidDownIn 0.5s ease-out forwards;transform:translateY(0)}",
  map: '{"version":3,"file":"SlidingPage.svelte","sources":["SlidingPage.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { tick } from \\"svelte\\";\\nexport let threshold = 0.4;\\nlet block;\\nlet visible = false;\\n$: visible_class = visible ? \\"isVisible\\" : \\"isInvisible\\";\\nonMount(() => {\\n  const observer = new IntersectionObserver((entries) => {\\n    entries.forEach((entry) => {\\n      const windowWidth = window.innerWidth;\\n      const rect = entry.target.getBoundingClientRect();\\n      console.log(\\"triggered\\");\\n      if (rect.left < windowWidth * (1 - threshold) && rect.right > 0) {\\n        visible = true;\\n      }\\n    });\\n  }, {\\n    threshold\\n  });\\n  observer.observe(block);\\n});\\n<\/script>\\r\\n\\r\\n<style>\\r\\n    .page {\\r\\n      min-width: 100vw;\\r\\n      /* height: 100vh; */\\r\\n    }\\r\\n    @keyframes slidDownIn {\\r\\n      from {\\r\\n        transform: translateY(-100%);\\r\\n      }\\r\\n      to {\\r\\n        transform: translateY(0);\\r\\n      }\\r\\n    }\\r\\n\\r\\n    .isInvisible {\\r\\n      animation: none;\\r\\n      opacity: 0;\\r\\n    }\\r\\n\\r\\n    .isVisible {\\r\\n      animation: slidDownIn 0.5s ease-out forwards;\\r\\n      transform: translateY(0);\\r\\n    }\\r\\n</style>\\r\\n\\r\\n<div bind:this={block} class=\\"page flex justify-center items-center transition-all {visible_class}\\">\\r\\n    <slot />\\r\\n</div>"],"names":[],"mappings":"AAwBI,oBAAM,CACJ,SAAS,CAAE,KAEb,CACA,WAAW,yBAAW,CACpB,IAAK,CACH,SAAS,CAAE,WAAW,KAAK,CAC7B,CACA,EAAG,CACD,SAAS,CAAE,WAAW,CAAC,CACzB,CACF,CAEA,2BAAa,CACX,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,CACX,CAEA,yBAAW,CACT,SAAS,CAAE,yBAAU,CAAC,IAAI,CAAC,QAAQ,CAAC,QAAQ,CAC5C,SAAS,CAAE,WAAW,CAAC,CACzB"}'
};
const SlidingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible_class;
  let { threshold = 0.4 } = $$props;
  let block;
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0) $$bindings.threshold(threshold);
  $$result.css.add(css$1);
  visible_class = "isInvisible";
  return `<div class="${"page flex justify-center items-center transition-all " + escape(visible_class, true) + " svelte-1yvz3mj"}"${add_attribute("this", block, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const PageSlideButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classStyles = $$props.class;
  let changePageFunc = $$props.changePage;
  return `<button class="${"pageSlideButton after:bg-gradient-to-r after:from-amber-500 after:to-rose-500 after:blur-xl after:rounded-full after:absolute after:p-8 after:-z-10 after:-top-2 after:-left-2 " + escape(classStyles, true) + " on:click=" + escape(changePageFunc, true)}"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button>`;
});
const currentPage = writable(0);
const pages = readable([
  {
    title: "About",
    type: true,
    content: ""
  },
  {
    title: "Skills",
    type: true,
    content: ""
  },
  {
    title: "CV",
    type: true,
    content: ""
    // },
    // {
    //     title: 'Hobbies',
    //     type: true,
    //     content: '',
  }
]);
const css = {
  code: "#container.svelte-482992{display:flex;overflow-x:hidden;scroll-snap-type:x mandatory;height:100vh;scroll-behavior:smooth}",
  map: '{"version":3,"file":"slidingContainer.svelte","sources":["slidingContainer.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport { currentPage } from \\"$lib/stores/PagesStore\\";\\nconst getCurrentPageIndex = (container) => {\\n  return Math.round(container.scrollLeft / container.clientWidth);\\n};\\nexport const updateScrollForDimensions = (container) => {\\n  container.scrollLeft = $currentPage * container.clientWidth;\\n};\\nexport const changePage = (index) => {\\n  const container = document.querySelector(\\"#container\\");\\n  const pagesList = document.querySelectorAll(\\".page\\");\\n  if (pagesList === null) return;\\n  if (container === null) return;\\n  let tempIndex = index;\\n  if (index < 0 || index > pagesList.length - 1) {\\n    tempIndex = index < 0 ? pagesList.length - 1 : 0;\\n  }\\n  ;\\n  container.scrollLeft = tempIndex * container.clientWidth;\\n  $currentPage = tempIndex;\\n};\\nexport const iteratePage = (container, direction) => {\\n  const currentIndex = getCurrentPageIndex(container);\\n  if (direction === \\"right\\") {\\n    changePage(currentIndex + 1);\\n  } else if (direction === \\"left\\") {\\n    changePage(currentIndex - 1);\\n  }\\n};\\nonMount(() => {\\n  const container = document.querySelector(\\"#container\\");\\n  const window = document.querySelector(\\"html\\");\\n  changePage($currentPage);\\n  if (container === null || window === null) return;\\n  const handleScroll = (event) => {\\n    event.preventDefault();\\n    const delta = event.deltaY;\\n    console.log(event);\\n    if (delta > 0) {\\n      iteratePage(container, \\"right\\");\\n    } else if (delta < 0) {\\n      iteratePage(container, \\"left\\");\\n    }\\n  };\\n  const handleKeydown = (event) => {\\n    console.log(event.key);\\n    if (event.key === \\"ArrowRight\\") {\\n      iteratePage(container, \\"right\\");\\n    } else if (event.key === \\"ArrowLeft\\") {\\n      iteratePage(container, \\"left\\");\\n    }\\n  };\\n  window.addEventListener(\\"keydown\\", handleKeydown);\\n  container.addEventListener(\\"wheel\\", handleScroll);\\n  return () => {\\n    window.removeEventListener(\\"keydown\\", handleKeydown);\\n    container.removeEventListener(\\"wheel\\", handleScroll);\\n  };\\n});\\n<\/script>\\r\\n\\r\\n<style>\\r\\n    #container {\\r\\n      display: flex;\\r\\n      overflow-x: hidden;\\r\\n      scroll-snap-type: x mandatory;\\r\\n      height: 100vh; /* Ensure the container takes the full height */\\r\\n      scroll-behavior: smooth; /* Smooth scrolling */\\r\\n    }\\r\\n    \\r\\n</style>\\r\\n\\r\\n<div id=\\"container\\" class=\\"flex overflow-x-scroll h-screen w-screen snap-x snap-mandatory\\">\\r\\n    <slot />\\r\\n</div>"],"names":[],"mappings":"AA8DI,wBAAW,CACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,CAAC,CAAC,SAAS,CAC7B,MAAM,CAAE,KAAK,CACb,eAAe,CAAE,MACnB"}'
};
const SlidingContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentPage, $$unsubscribe_currentPage;
  $$unsubscribe_currentPage = subscribe(currentPage, (value) => $currentPage = value);
  const getCurrentPageIndex = (container) => {
    return Math.round(container.scrollLeft / container.clientWidth);
  };
  const updateScrollForDimensions = (container) => {
    container.scrollLeft = $currentPage * container.clientWidth;
  };
  const changePage = (index) => {
    const container = document.querySelector("#container");
    const pagesList = document.querySelectorAll(".page");
    if (pagesList === null) return;
    if (container === null) return;
    let tempIndex = index;
    if (index < 0 || index > pagesList.length - 1) {
      tempIndex = index < 0 ? pagesList.length - 1 : 0;
    }
    container.scrollLeft = tempIndex * container.clientWidth;
    set_store_value(currentPage, $currentPage = tempIndex, $currentPage);
  };
  const iteratePage = (container, direction) => {
    const currentIndex = getCurrentPageIndex(container);
    if (direction === "right") {
      changePage(currentIndex + 1);
    } else if (direction === "left") {
      changePage(currentIndex - 1);
    }
  };
  if ($$props.updateScrollForDimensions === void 0 && $$bindings.updateScrollForDimensions && updateScrollForDimensions !== void 0) $$bindings.updateScrollForDimensions(updateScrollForDimensions);
  if ($$props.changePage === void 0 && $$bindings.changePage && changePage !== void 0) $$bindings.changePage(changePage);
  if ($$props.iteratePage === void 0 && $$bindings.iteratePage && iteratePage !== void 0) $$bindings.iteratePage(iteratePage);
  $$result.css.add(css);
  $$unsubscribe_currentPage();
  return `<div id="container" class="flex overflow-x-scroll h-screen w-screen snap-x snap-mandatory svelte-482992">${slots.default ? slots.default({}) : ``}</div>`;
});
const PreviewButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { current = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0) $$bindings.current(current);
  return `<button class="flex flex-col mx-4 relative place-items-center group/item"><h2 class="${"text-center " + escape(current === true ? "text-zinc-100" : "text-zinc-600", true) + " -bottom-10 text-4xl opacity-0 absolute group-hover/bar:relative group-hover/bar:bottom-1 group-hover/bar:opacity-100 group-hover/item:text-zinc-300"}">${escape(title)}</h2> <div class="${"w-10 h-[2px] " + escape(
    current === true ? "current-page bg-zinc-300" : "bg-zinc-600",
    true
  ) + " relative transition-transform group-hover/item:bg-zinc-300 group-hover/bar:w-full " + escape(current == true ? "" : "group-hover/item:w-[130%]", true)}"><div class="absolute w-10 h-4 -bottom-10 py-10 left-0 border-transparent border-2 group-hover/bar:w-20 group-hover/bar:-left-5" data-svelte-h="svelte-1smtauv"></div></div></button>`;
});
const PageNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex;
  let $currentPage, $$unsubscribe_currentPage;
  $$unsubscribe_currentPage = subscribe(currentPage, (value) => $currentPage = value);
  let { switchFunction } = $$props;
  let { pages: pages2 } = $$props;
  if ($$props.switchFunction === void 0 && $$bindings.switchFunction && switchFunction !== void 0) $$bindings.switchFunction(switchFunction);
  if ($$props.pages === void 0 && $$bindings.pages && pages2 !== void 0) $$bindings.pages(pages2);
  currentIndex = $currentPage;
  $$unsubscribe_currentPage();
  return `<div class="flex flex-row w-screen justify-center bg-transparent absolute bottom-16 group/bar z-50">${each(pages2, (page) => {
    return `${validate_component(PreviewButton, "PreviewButton").$$render(
      $$result,
      {
        title: page.title,
        current: currentIndex == pages2.indexOf(page)
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pages, $$unsubscribe_pages;
  $$unsubscribe_pages = subscribe(pages, (value) => $pages = value);
  const pagesList = $pages;
  let iteratePage;
  let updateScrollForDimensions;
  let changePage;
  let title = pagesList[0].title;
  currentPage.subscribe((value) => {
    title = pagesList[value].title;
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""}  ${validate_component(SlidingContainer, "SlidingContainer").$$render(
      $$result,
      {
        iteratePage,
        changePage,
        updateScrollForDimensions
      },
      {
        iteratePage: ($$value) => {
          iteratePage = $$value;
          $$settled = false;
        },
        changePage: ($$value) => {
          changePage = $$value;
          $$settled = false;
        },
        updateScrollForDimensions: ($$value) => {
          updateScrollForDimensions = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SlidingPage, "SlidingPage").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="max-w-screen-md w-4/5"><h1 class="text-[10rem] leading-none relative">${validate_component(GradientText, "GradientText").$$render($$result, {}, {}, {
                default: () => {
                  return `Pavel Fedorov`;
                }
              })} <h2 class="absolute -top-32 right-5 border-2 border-r-0 border-b-0 border-amber-500 rounded-full w-0 h-0 p-32">${validate_component(GradientText, "GradientText").$$render($$result, {}, {}, {
                default: () => {
                  return `23`;
                }
              })}</h2></h1> <div class="flex flex-row text-white gap-10" data-svelte-h="svelte-snk6uj"><div><p class="text-xl">Hello! I&#39;m Pavel, a 23-year-old tech enthusiast with a master&#39;s degree in Cybersecurity. Currently, I&#39;m honing my skills in full-stack development in Vancouver, BC, Canada.</p></div> <div><p class="text-xl">My journey into IT and web development started with a passion for solving complex problems and a desire to create impactful digital solutions. Over the years, I&#39;ve immersed myself in various technologies and gained hands-on experience through both my academic pursuits and practical projects.</p></div></div></div>`;
            }
          })} ${validate_component(SlidingPage, "SlidingPage").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="flex flex-row gap-16"><div><h4 class="text-6xl -ml-10 mt-8">${validate_component(GradientText, "GradientText").$$render($$result, {}, {}, {
                default: () => {
                  return `Main Tech:`;
                }
              })}</h4>  <ul class="list-disc text-white text-4xl "><li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "I've extensively used JavaScript in my projects, both academic and personal. It has been the backbone of many of my web applications, providing dynamic and interactive elements to enhance user experience.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `JavaScript`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "TypeScript has been a crucial part of my toolkit, offering me the ability to write scalable and maintainable code. I've utilized TypeScript primarily in my recent projects to ensure type safety and reduce bugs.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `TypeScript`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "Svelte has revolutionized my approach to building web applications. I used Svelte for my recent projects, appreciating its simplicity and performance benefits, which have allowed me to create fast and responsive user interfaces.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `Svelte`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "Tailwind CSS has been a game-changer for styling my applications. I love its utility-first approach, which has significantly sped up my development process and allowed for easy customization of my projects.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `Tailwind CSS`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "CSS has been a fundamental part of my skill set, enabling me to create visually appealing and user-friendly designs. I have used CSS extensively to bring my web pages to life with layouts and animations.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `CSS`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "HTML is the cornerstone of my web development skills. My proficiency in HTML ensures that I can structure web content effectively, laying a strong foundation for any web project.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `HTML`;
                  }
                }
              )}</li></ul></div> <div class="ml-20 text-right"><h1 class="text-[12rem] leading-none">${validate_component(GradientText, "GradientText").$$render($$result, {}, {}, {
                default: () => {
                  return `Skills`;
                }
              })}</h1> <div class="mt-10"><h4 class="text-4xl">${validate_component(GradientText, "GradientText").$$render($$result, {}, {}, {
                default: () => {
                  return `Additional:`;
                }
              })}</h4> <ul class="flex flex-col text-2xl -mr-3"><li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "Ensuring applications work seamlessly across devices.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `Responsive Design`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "Tackling challenges with innovative  solutions.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `Problem-Solving`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "Experience working in teams during my education and startup projects.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `Team Collaboration`;
                  }
                }
              )}</li> <li class="p-4">${validate_component(AnnotationMark, "AnnotationMark").$$render(
                $$result,
                {
                  description: "Managing timelines and deliverables effectively.",
                  font_size: "1"
                },
                {},
                {
                  default: () => {
                    return `Project Management`;
                  }
                }
              )}</li></ul></div></div></div>`;
            }
          })} ${validate_component(SlidingPage, "SlidingPage").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(BlocksGrid, "InfoArticle").$$render($$result, {}, {}, {
                fourth: () => {
                  return `<div slot="fourth" class="text-justify"><p class="text-[40px]" data-svelte-h="svelte-mhm1jq">If so, mind spending couple minutes to</p> ${validate_component(GradientButton, "GradientButton").$$render($$result, {}, {}, {
                    default: () => {
                      return `Check my CV`;
                    }
                  })}</div>`;
                },
                third: () => {
                  return `<div slot="third" class="text-justify" data-svelte-h="svelte-1plmaem"><p class="text-[40px]">You can be interested in hiring me as your
					<br>
					front-end or full-stack developer</p></div>`;
                },
                second: () => {
                  return `<div slot="second" class="text-justify" data-svelte-h="svelte-12siji0"><p class="text-[40px]">Here are brief information about my study projects, achievements and work experience</p></div>`;
                },
                first: () => {
                  return `<div slot="first"><h1 class="text-[280px] text-center leading-[216px] p-0">${validate_component(GradientText, "GradientText").$$render($$result, {}, {}, {
                    default: () => {
                      return `CV`;
                    }
                  })}</h1></div>`;
                }
              })}`;
            }
          })}`;
        }
      }
    )} ${validate_component(PageSlideButton, "PageSlideButton").$$render($$result, { class: "fixed top-1/2 left-6 slideLeft" }, {}, {})} ${validate_component(PageSlideButton, "PageSlideButton").$$render(
      $$result,
      {
        class: "fixed top-1/2 right-6 rotate-180 slideRight"
      },
      {},
      {}
    )} ${validate_component(PageNav, "PageNav").$$render(
      $$result,
      {
        pages: pagesList,
        switchFunction: changePage
      },
      {},
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_pages();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ZagtGQqQ.js.map
