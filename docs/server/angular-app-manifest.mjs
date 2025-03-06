
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/testtt2',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/testtt2"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 498, hash: 'cc2860c5925aa4d8f822679599d7a6c27df6af2c4889dcca58c89e47e4b0916a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '14b038f159af6c5565f69acc053cb0ef9cd91e76c464f20bac5dc1baa46dc581', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20916, hash: '4534e5574ba63e23b2a39cb89ef91e2c69f8157a6c5074dcb62a0761e595e741', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
