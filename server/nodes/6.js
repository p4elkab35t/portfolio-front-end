

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BOVodQbB.js","_app/immutable/chunks/scheduler.B0sxDJPD.js","_app/immutable/chunks/index.3lqU4Bo6.js","_app/immutable/chunks/AnnotationMark.C7r1bbx7.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/AnnotationMark.D3HZm_5r.css"];
export const fonts = [];
