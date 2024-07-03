import { c as create_ssr_component, v as validate_component, e as each } from './ssr-DrBziz2r.js';
import { A as AnnotationMark } from './AnnotationMark-DFsCMtSz.js';

const BlocksList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { inlineComponents = [] } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.inlineComponents === void 0 && $$bindings.inlineComponents && inlineComponents !== void 0) $$bindings.inlineComponents(inlineComponents);
  return `<ul>${each(items, (item, index) => {
    return `<li><!-- HTML_TAG_START -->${item}<!-- HTML_TAG_END --> </li>`;
  })}</ul>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const items = [
    "item 1 <AnnotationMark description='thank you' font_size='1'>amet</AnnotationMark>",
    "item 2 <AnnotationMark description='thank you' font_size='1'>amet</AnnotationMark>",
    "item 3",
    "item 4",
    "item 5",
    "<AnnotationMark description='thank you' font_size='1'>amet</AnnotationMark> item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10"
  ];
  return `<div><h1 class="text-6xl font-bold text-white relative">azazaza
${validate_component(AnnotationMark, "AnnotationMark").$$render(
    $$result,
    {
      description: "new block list item",
      font_size: "2"
    },
    {},
    {
      default: () => {
        return `List Item`;
      }
    }
  )}
 brbrbr</h1> <p class="text-white p-10">Lorem ipsum dolor sit, ${validate_component(AnnotationMark, "AnnotationMark").$$render($$result, { description: "thank you", font_size: "1" }, {}, {
    default: () => {
      return `amet`;
    }
  })} consectetur adipisicing elit. Aliquid, debitis in doloremque est, fuga assumenda perferendis animi repellendus fugit error iure quidem illum voluptatibus quia maxime cupiditate, sint voluptas necessitatibus.
    Lorem ipsum dolor sit amet consectetur ${validate_component(AnnotationMark, "AnnotationMark").$$render($$result, { description: "thank you", font_size: "1" }, {}, {
    default: () => {
      return `adipisicing`;
    }
  })}elit. Suscipit ducimus voluptas perspiciatis vero rerum eum, exercitationem, praesentium provident rem nulla totam. Similique consequatur illum obcaecati repellendus, ut minus dolores hic?</p></div> <div>${validate_component(BlocksList, "BlocksList").$$render($$result, { items }, {}, {})}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-V13k691U.js.map
