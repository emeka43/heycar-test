import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.nopcommerce.com/',
    specPattern: '**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    fixturesFolder: 'cypress/fixtures',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewportHeight: 800,
    viewportWidth: 1280,
  },
})