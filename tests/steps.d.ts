/// <reference types='codeceptjs' />
type steps_file = typeof import('../common/steps/steps_file');
type loginPage = typeof import('./web/support/pageObjects/loginPage');
type userApi = typeof import('./api/support/api/userApi');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, userApi: userApi }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
