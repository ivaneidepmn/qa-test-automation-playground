const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1366,
    viewportHeight: 768,

    setupNodeEvents(on, config) {
      return config;
    },
  },
});