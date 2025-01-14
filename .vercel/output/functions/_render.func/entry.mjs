import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ClJzzTSG.mjs';
import { manifest } from './manifest_CxC00TJy.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_BK7xZCKl.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_Cr2WbHoS.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.0.5_jiti@1.21.6_rollup@4.28.1_typescript@5.7.2_yaml@2.6.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "db39551d-96b6-4338-89a5-0e2b8da9a5ab",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
