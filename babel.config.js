module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            components: "./src/components",
            helpers: "./src/helpers",
            screens: "./src/screens",
            store: "./src/store",
          },
        },
      ],
    ],
  };
};
