module.exports = {
  plugins: [
    {
      name: "cleanupIDs",
      params: {
        minify: true,
      },
    },
    {
      name: "preset-default",
      params: {
        overrides: {
          // Specify any overrides or additional configurations here
        },
      },
    },
  ],
};
