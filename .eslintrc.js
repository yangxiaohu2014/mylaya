// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  // 'settings': {
  //   'import/resolver': {
  //     'webpack': {
  //       'config': 'build/webpack.base.conf.js'
  //     }
  //   }
  // },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // don't require .vue extension when importing
    'import/extensions': [0, 'always', {
      'js': 'never',
      'vue': 'never',
      'ts': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [0, {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [
      1,
      2
    ],
    "linebreak-style": [
      1,
      "unix"
    ],
    "quotes": [
      1,
      "single"
    ],
    "semi": [
      1,
      "never"
    ],
    "comma-dangle": [0, "always"],
    "no-new": 0,
    "no-console": 0,
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    "no-mixed-spaces-and-tabs": [1, "smart-tabs"],
    "init-declarations": 0,
    "no-inline-comments": 0,
  }
}
