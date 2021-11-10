import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" type=\"image/png\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<link rel=\"stylesheet\" href=\"https://unpkg.com/purecss@2.0.5/build/pure-min.css\">\n\t\t<link rel=\"stylesheet\" href=\"https://unpkg.com/purecss@2.0.5/build/grids-responsive-min.css\">\n\t\t<title>Data Science Notebooks</title>\n\t\t<meta name=\"title\" content=\"Data Science Notebooks\">\n\t\t<meta name=\"description\" content=\"Data science gets done in notebooks. They are a powerful interface for exploratory programming, and the flexible format allows combining code with visualisations and insights.\">\n\t\t<meta name=\"keywords\" content=\"python, jupyter, data science, machine learning, notebooks, sagemaker, colab\">\n\t\t<meta name=\"author\" content=\"Robert Lacok\">\n\n\t\t<!-- Open Graph / Facebook -->\n\t\t<meta property=\"og:type\" content=\"website\">\n\t\t<meta property=\"og:url\" content=\"https://datasciencenotebook.org/\">\n\t\t<meta property=\"og:title\" content=\"Data Science Notebooks\">\n\t\t<meta property=\"og:description\" content=\"Data science gets done in notebooks. They are a powerful interface for exploratory programming, and the flexible format allows combining code with visualisations and insights.\">\n\t\t<meta property=\"og:image\" content=\"/meta-image.jpg\">\n\n\t\t<!-- Twitter -->\n\t\t<meta property=\"twitter:card\" content=\"summary_large_image\">\n\t\t<meta property=\"twitter:url\" content=\"https://datasciencenotebook.org/\">\n\t\t<meta property=\"twitter:title\" content=\"Data Science Notebooks\">\n\t\t<meta property=\"twitter:description\" content=\"Data science gets done in notebooks. They are a powerful interface for exploratory programming, and the flexible format allows combining code with visualisations and insights.\">\n\t\t<meta property=\"twitter:image\" content=\"/meta-image.jpg\">\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-98df5818.js",
			css: ["/./_app/assets/start-a8cd1609.css"],
			js: ["/./_app/start-98df5818.js","/./_app/chunks/vendor-952e1142.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":28020,"type":"image/png"},{"file":"meta-image.jpg","size":294945,"type":"image/jpeg"},{"file":"robots.txt","size":120,"type":"text/plain"},{"file":"sitemap.xml","size":34397,"type":"application/xml"},{"file":"vendorPicturesFullRes/cocalc.png","size":556252,"type":"image/png"},{"file":"vendorPicturesFullRes/colab.png","size":302247,"type":"image/png"},{"file":"vendorPicturesFullRes/count.png","size":184178,"type":"image/png"},{"file":"vendorPicturesFullRes/databricks.png","size":120499,"type":"image/png"},{"file":"vendorPicturesFullRes/datalore.png","size":283680,"type":"image/png"},{"file":"vendorPicturesFullRes/deepnote.png","size":395828,"type":"image/png"},{"file":"vendorPicturesFullRes/hex.png","size":308935,"type":"image/png"},{"file":"vendorPicturesFullRes/jupyter.png","size":91653,"type":"image/png"},{"file":"vendorPicturesFullRes/kaggle.png","size":421131,"type":"image/png"},{"file":"vendorPicturesFullRes/mode.png","size":271938,"type":"image/png"},{"file":"vendorPicturesFullRes/nextjournal.png","size":348832,"type":"image/png"},{"file":"vendorPicturesFullRes/nteract.png","size":246886,"type":"image/png"},{"file":"vendorPicturesFullRes/observable.png","size":392637,"type":"image/png"},{"file":"vendorPicturesFullRes/pluto.png","size":71397,"type":"image/png"},{"file":"vendorPicturesFullRes/polynote.png","size":426990,"type":"image/png"},{"file":"vendorPicturesFullRes/query-me.png","size":107512,"type":"image/png"},{"file":"vendorPicturesFullRes/querybook.png","size":478713,"type":"image/png"},{"file":"vendorPicturesFullRes/sagemaker.png","size":92947,"type":"image/png"},{"file":"vendorPicturesFullRes/vscode.png","size":75977,"type":"image/png"},{"file":"vendorPicturesFullRes/zepl.png","size":271107,"type":"image/png"},{"file":"vendorPicturesFullRes/zeppelin.png","size":185723,"type":"image/png"},{"file":"vendorPicturesJPG/cocalc.jpeg","size":146269,"type":"image/jpeg"},{"file":"vendorPicturesJPG/colab.jpeg","size":79050,"type":"image/jpeg"},{"file":"vendorPicturesJPG/count.jpeg","size":92554,"type":"image/jpeg"},{"file":"vendorPicturesJPG/databricks.jpeg","size":87005,"type":"image/jpeg"},{"file":"vendorPicturesJPG/datalore.jpeg","size":79402,"type":"image/jpeg"},{"file":"vendorPicturesJPG/deepnote.jpeg","size":85645,"type":"image/jpeg"},{"file":"vendorPicturesJPG/hex.jpeg","size":171636,"type":"image/jpeg"},{"file":"vendorPicturesJPG/jupyter.jpeg","size":93242,"type":"image/jpeg"},{"file":"vendorPicturesJPG/kaggle.jpeg","size":65264,"type":"image/jpeg"},{"file":"vendorPicturesJPG/mode.jpeg","size":77501,"type":"image/jpeg"},{"file":"vendorPicturesJPG/nextjournal.jpeg","size":95513,"type":"image/jpeg"},{"file":"vendorPicturesJPG/nteract.jpeg","size":44465,"type":"image/jpeg"},{"file":"vendorPicturesJPG/observable.jpeg","size":63359,"type":"image/jpeg"},{"file":"vendorPicturesJPG/pluto.jpeg","size":67515,"type":"image/jpeg"},{"file":"vendorPicturesJPG/polynote.jpeg","size":93715,"type":"image/jpeg"},{"file":"vendorPicturesJPG/query-me.jpeg","size":74195,"type":"image/jpeg"},{"file":"vendorPicturesJPG/querybook.jpeg","size":151592,"type":"image/jpeg"},{"file":"vendorPicturesJPG/sagemaker.jpeg","size":81814,"type":"image/jpeg"},{"file":"vendorPicturesJPG/vscode.jpeg","size":71000,"type":"image/jpeg"},{"file":"vendorPicturesJPG/zepl.jpeg","size":69468,"type":"image/jpeg"},{"file":"vendorPicturesJPG/zeppelin.jpeg","size":87116,"type":"image/jpeg"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/alternatives\/([^/]+?)\/?$/,
						params: (m) => ({ vendor: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/alternatives/[vendor].svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/features\/realtime-collaboration\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/features/realtime-collaboration.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/features\/versioning\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/features/versioning.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/features\/comments\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/features/comments.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/compare\/([^/]+?)\/([^/]+?)\/?$/,
						params: (m) => ({ firstVendor: d(m[1]), secondVendor: d(m[2])}),
						a: ["src/routes/__layout.svelte", "src/routes/compare/[firstVendor]/[secondVendor].svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/alternatives/[vendor].svelte": () => import("../../src/routes/alternatives/[vendor].svelte"),"src/routes/features/realtime-collaboration.svelte": () => import("../../src/routes/features/realtime-collaboration.svelte"),"src/routes/features/versioning.svelte": () => import("../../src/routes/features/versioning.svelte"),"src/routes/features/comments.svelte": () => import("../../src/routes/features/comments.svelte"),"src/routes/compare/[firstVendor]/[secondVendor].svelte": () => import("../../src/routes/compare/[firstVendor]/[secondVendor].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-69ba5ba9.js","css":["/./_app/assets/pages/__layout.svelte-dcb63ccf.css"],"js":["/./_app/pages/__layout.svelte-69ba5ba9.js","/./_app/chunks/vendor-952e1142.js"],"styles":null},"src/routes/__error.svelte":{"entry":"/./_app/pages/__error.svelte-92bd5cf5.js","css":[],"js":["/./_app/pages/__error.svelte-92bd5cf5.js","/./_app/chunks/vendor-952e1142.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-e05b8ed0.js","css":["/./_app/assets/pages/index.svelte-c61aa8ae.css","/./_app/assets/VendorCard-d8639868.css","/./_app/assets/VendorTable-5e2eb825.css","/./_app/assets/VendorGrid-f3914ea7.css"],"js":["/./_app/pages/index.svelte-e05b8ed0.js","/./_app/chunks/vendor-952e1142.js","/./_app/chunks/VendorCard-207a68a3.js","/./_app/chunks/VendorTable-e389c8a8.js","/./_app/chunks/VendorGrid-40420d33.js"],"styles":null},"src/routes/alternatives/[vendor].svelte":{"entry":"/./_app/pages/alternatives/[vendor].svelte-49ba64ff.js","css":["/./_app/assets/pages/alternatives/[vendor].svelte-ecc54c55.css","/./_app/assets/VendorCard-d8639868.css","/./_app/assets/VendorGrid-f3914ea7.css","/./_app/assets/VendorTable-5e2eb825.css"],"js":["/./_app/pages/alternatives/[vendor].svelte-49ba64ff.js","/./_app/chunks/vendor-952e1142.js","/./_app/chunks/VendorCard-207a68a3.js","/./_app/chunks/VendorGrid-40420d33.js","/./_app/chunks/VendorTable-e389c8a8.js"],"styles":null},"src/routes/features/realtime-collaboration.svelte":{"entry":"/./_app/pages/features/realtime-collaboration.svelte-8597ecaa.js","css":["/./_app/assets/pages/features/realtime-collaboration.svelte-731b4a61.css","/./_app/assets/VendorGrid-f3914ea7.css","/./_app/assets/VendorCard-d8639868.css"],"js":["/./_app/pages/features/realtime-collaboration.svelte-8597ecaa.js","/./_app/chunks/vendor-952e1142.js","/./_app/chunks/VendorGrid-40420d33.js","/./_app/chunks/VendorCard-207a68a3.js"],"styles":null},"src/routes/features/versioning.svelte":{"entry":"/./_app/pages/features/versioning.svelte-eef26d0b.js","css":["/./_app/assets/pages/features/realtime-collaboration.svelte-731b4a61.css","/./_app/assets/VendorGrid-f3914ea7.css","/./_app/assets/VendorCard-d8639868.css"],"js":["/./_app/pages/features/versioning.svelte-eef26d0b.js","/./_app/chunks/vendor-952e1142.js","/./_app/chunks/VendorGrid-40420d33.js","/./_app/chunks/VendorCard-207a68a3.js"],"styles":null},"src/routes/features/comments.svelte":{"entry":"/./_app/pages/features/comments.svelte-e78b88eb.js","css":["/./_app/assets/pages/features/realtime-collaboration.svelte-731b4a61.css","/./_app/assets/VendorGrid-f3914ea7.css","/./_app/assets/VendorCard-d8639868.css"],"js":["/./_app/pages/features/comments.svelte-e78b88eb.js","/./_app/chunks/vendor-952e1142.js","/./_app/chunks/VendorGrid-40420d33.js","/./_app/chunks/VendorCard-207a68a3.js"],"styles":null},"src/routes/compare/[firstVendor]/[secondVendor].svelte":{"entry":"/./_app/pages/compare/[firstVendor]/[secondVendor].svelte-6c7e00ca.js","css":["/./_app/assets/pages/compare/[firstVendor]/[secondVendor].svelte-f7d62e14.css","/./_app/assets/VendorCard-d8639868.css"],"js":["/./_app/pages/compare/[firstVendor]/[secondVendor].svelte-6c7e00ca.js","/./_app/chunks/vendor-952e1142.js","/./_app/chunks/VendorCard-207a68a3.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}