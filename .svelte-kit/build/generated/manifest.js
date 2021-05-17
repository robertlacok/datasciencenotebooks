const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/alternatives/[vendor].svelte"),
	() => import("../../../src/routes/compare/[firstVendor]/[secondVendor].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/alternatives/[vendor].svelte
	[/^\/alternatives\/([^/]+?)\/?$/, [c[0], c[3]], [c[1]], (m) => ({ vendor: d(m[1])})],

	// src/routes/compare/[firstVendor]/[secondVendor].svelte
	[/^\/compare\/([^/]+?)\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ firstVendor: d(m[1]), secondVendor: d(m[2])})]
];

export const fallback = [c[0](), c[1]()];