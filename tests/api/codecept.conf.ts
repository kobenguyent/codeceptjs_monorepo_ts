
import { setHeadlessWhen } from '@codeceptjs/configure';
setHeadlessWhen(process.env.HEADLESS);

export const config: CodeceptJS.MainConfig = {
  tests: './tests/**/*.ts',
  output: '../../output',
  helpers: {
    REST: {
      endpoint: 'https://dummyjson.com',
      timeout: 30_000,
      onRequest: (request) => {
        request.headers = {...request.headers };
      }
    },
    JSONResponse: {}
  },
  include: {
    I: '../../common/steps/steps_file.ts',
    userApi: './support/api/userApi.ts'
  },
  name: 'api-tests',
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  }
};
