// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 80,
  htmlWhitespaceSensitivity: "strict",
  proseWrap: "always",
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
