const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: false,
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    './eslint/best-practices.yaml',
    './eslint/ecmascript-6.yaml',
    './eslint/node-js-and-common-js.yaml',
    './eslint/possible-errors.yaml',
    './eslint/strict-mode.yaml',
    './eslint/stylistic-issues.yaml',
    './eslint/variables.yaml',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'prettier', 'import'],
  settings: {
    'import/core-modules': ['modules', 'utils', 'constants', 'routes'],
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.config.js'),
      },
      node: {
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        proseWrap: 'never',
      },
    ],

    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],

    'react/jsx-no-undef': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/prop-types': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent-props': [0, 2],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-indent': [0, 2],
    'react/jsx-closing-bracket-location': 0,
    'react/no-multi-comp': 0,
    'react/jsx-filename-extension': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-state': 'warn',
    'react/no-typos': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-did-mount-set-state': 0,
    'react/no-find-dom-node': 0,
    'react/jsx-no-target-blank': 0,
    'react/no-string-refs': 0,
    'react/display-name': 0,
    curly: 2,
  },
  globals: {
    document: true,
    window: true,
    Event: true,
    alert: true,
    FormData: true,
    File: true,
    Blob: true,
    confirm: true,
    location: true,
    $: true,
    d3: true,
    c3: true,
    sessionStorage: true,
    REDESIGN_ENABLED: false,
    cancelAnimationFrame: true,
    requestAnimationFrame: true,
  },
};
