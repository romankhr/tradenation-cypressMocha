const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // You can add any event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.js",
  },
});