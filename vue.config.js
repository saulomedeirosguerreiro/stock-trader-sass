module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import @/styles/_variables.sass
          @import @/styles/mixins.sass
        `
      }
    }
  }
};
