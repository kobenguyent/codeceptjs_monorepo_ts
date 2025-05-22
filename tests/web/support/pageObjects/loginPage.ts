const  I = actor();

export const loginPage = {
  fields: {
    username: '#username',
    password: '#password'
  },
  buttons: {
    submit: '#submit'
  },
  login(username: string, password: CodeceptJS.Secret|string) {
    I.fillField(this.fields.username, username);
    I.fillField(this.fields.password, password);
    I.click(this.buttons.submit);
  }
};
