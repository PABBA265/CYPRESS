import cucumber from "@cypress-cucumber-preprocessor";

export default (on, config) => {
  // Custom logging task
  on('task', {
    log(message) {
      console.log(message); // Log the message to the console
      return null;
    },
  });

  // Modify browser launch options for Chrome
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--disable-dev-shm-usage'); // Disable SHM usage for chromium-based browsers
    }
    return launchOptions;
  });

  // Set environment variable for URL (This can be accessed via Cypress.env('customUrl'))
  config.env.customUrl = 'https://magento.softwaretestingboard.com/';

  // Use cucumber preprocessor for handling Gherkin syntax files
  on('file:preprocessor', cucumber());

  // Return updated config after modifications
  return config;
};
