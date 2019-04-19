module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/global-styles/variables.scss";
        @import "@/global-styles/grid.scss";
        @import "@/global-styles/mixins.scss";
        `
      }
    }
  }
};
