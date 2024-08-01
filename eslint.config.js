import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  vue: true,
  ignores: [
    'tsconfig.*',
    '*.md',
  ],
}, {
  rules: {
    'no-console': 'off',
    'vue/html-self-closing': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
