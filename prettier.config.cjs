/** @typedef  {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
  arrowParens: "always",
  printWidth: 120,
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  proseWrap: "always", // printWidth line breaks in md/mdx
  endOfLine: "lf",
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ["^(react|next?/?([a-zA-Z/]*))$", "<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};

module.exports = config;
