const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icon/favicon-128.ico","icon/favicon-16.ico","icon/favicon-32.ico","icon/favicon-48.ico","icon/favicon-64.ico","icon/favicon.ico","icon/favicon_source.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CjkV4JUS.js","app":"_app/immutable/entry/app.DUJT9n-y.js","imports":["_app/immutable/entry/start.CjkV4JUS.js","_app/immutable/chunks/entry.C_HCmIw0.js","_app/immutable/chunks/scheduler.B0sxDJPD.js","_app/immutable/chunks/index.C7e39qGW.js","_app/immutable/entry/app.DUJT9n-y.js","_app/immutable/chunks/scheduler.B0sxDJPD.js","_app/immutable/chunks/index.3lqU4Bo6.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-I_XOVdYH.js')),
			__memo(() => import('./chunks/1-DnmzjMJt.js')),
			__memo(() => import('./chunks/2-ChsH97fU.js')),
			__memo(() => import('./chunks/3-IZVSR8JG.js')),
			__memo(() => import('./chunks/4-Cvy3qcMR.js')),
			__memo(() => import('./chunks/5-B_gEeHrH.js')),
			__memo(() => import('./chunks/6-0rTX-wRF.js')),
			__memo(() => import('./chunks/7-BOtna7W3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/indev",
				pattern: /^\/indev\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/train",
				pattern: /^\/train\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
