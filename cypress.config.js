const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  try {
    // Add Cucumber preprocessor plugin
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    // Use ESBuild with Node.js platform and resolve "path"
    on(
      "file:preprocessor",
      createBundler({
        plugins: [
          createEsbuildPlugin.default(config),
          {
            name: "node-builtins",
            setup(build) {
              build.onResolve({ filter: /^path$/ }, () => ({
                path: require.resolve("path-browserify"), // Use path-browserify for compatibility
              }));
            },
          },
        ],
      })
    );

    // Set up Allure reporting plugin
    allureWriter(on, config);
  } catch (error) {
    console.error("Error during Cypress plugin setup:", error);
  }

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: [
      "cypress/e2e/features/*.feature", // Feature files
      "cypress/e2e/*.js",               // JavaScript test files
    ],
    baseUrl: "https://magento.softwaretestingboard.com/",
    chromeWebSecurity: false,           // Disable for cross-origin requests
    env: {
      allureReuseAfterSpec: true,       // Enable Allure reporting
      defaultUser: "test_user@example.com",
      defaultPassword: "Password123",
    },
    supportFile: "cypress/support/e2e.js", // Support file for custom commands
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
  },
});
