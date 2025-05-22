export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*.ts',
  output: '../../output',
  helpers: {
    Playwright: {
      url: 'https://practicetestautomation.com/practice-test-login',
      browser: 'chromium'
    }
  },
  include: {
    I: '../../common/steps/steps_file.ts',
    loginPage: './support/pageObjects/loginPage.ts'
  },
  name: 'web-tests',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  }
};
