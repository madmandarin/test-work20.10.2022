const { defineConfig } = require('@vue/cli-service');

module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/styles/reset.scss";
            @import "@/styles/_variables.scss";
            @import "@/styles/default.scss";
            @import "@/styles/font-icons.scss";
            `,
      },
    },
  },
};
