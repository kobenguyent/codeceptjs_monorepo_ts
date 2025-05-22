const { I } = inject();

export const userApi = {
  async login(username: string, password: string) {
    return await I.sendPostRequest('/auth/login', {
      username,
      password
    });
  }
};
