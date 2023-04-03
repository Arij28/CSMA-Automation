const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    MAILOSAUR_API_KEY: "mvSGfcIaT3VHtUvkMWSpTd15f2iKtI3c",
  }
});
