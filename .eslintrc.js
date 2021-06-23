module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    curly: ['error', 'multi-line'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-mutable-exports': 'off',
    'brace-style': ['error', 'stroustrup'],
  },
}
