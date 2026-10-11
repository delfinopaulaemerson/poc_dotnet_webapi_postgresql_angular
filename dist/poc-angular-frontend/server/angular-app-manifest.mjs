
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: '/',
  criticalCssPlans: [[1,"/styles-5INURTSO.css",0,[],[],[]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/navbar"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 443, hash: 'fe638f768c92e7d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 956, hash: 'afd1d7b29958ba9a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'navbar/index.html': {size: 5490, hash: '009949d5dda079b4', text: () => import('./assets-chunks/navbar_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 990, hash: '5f696c29639cb88c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5188, hash: '08ec2a996e15860b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}
  },
};
