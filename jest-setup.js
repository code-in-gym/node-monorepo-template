globalThis.localStorage = {
  store: {},
  getItem: (key) => this.store[key] || null,
  setItem: (key, value) => (this.store[key] = String(value)),
  removeItem: (key) => delete this.store[key],
  clear: () => (this.store = {}),
};

globalThis.fetch = require('node-fetch');
