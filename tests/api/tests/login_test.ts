import {userApi} from "../support/api/userApi";

Feature('API Login');

Scenario('Login via API returns token', async ({ I }) => {
  const response = await userApi.login('emilys', 'emilyspass');
  I.seeResponseCodeIsSuccessful();
  I.seeResponseContainsKeys(['accessToken']);
});
