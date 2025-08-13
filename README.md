# Emeka's Final Interview at HeyCar
- In this repo you'll find Emeka's tests for the demo ecommerce app! 

### Frameworks used

- Cypress
- Playwright

### Set-up
Prerequisites: You must have node installed
- Clone the repo 
- Upon opening the repo, run `npm install` to install all packages
- Install playwright browsers with `npx playwright install` and `npx playwright install msedge`
- Run the Cypress tests using `npx cypress run` or the playwright tests with `npx playwright test`

You can run each package in UI mode using `npx cypress open` or `npx playwright test --ui` 

### Disclaimer and limitations

- The tests from each framework should be run in headless mode due to cloudflare blocking access to the test runs when running them in UI mode - the playwright tests also fail intermittently due to cloudflare restrictions
- The playwright test will fail when running npx cypress run due to both tests having the same spec pattern (spec.ts) but they both pass when run individually
