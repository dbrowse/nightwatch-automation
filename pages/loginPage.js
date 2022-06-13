module.exports = {
  url: "https://regressiond.int2-ram.m2m.telekom.com/",
  elements: {
    cookieBanner: "#app > c8y-bootstrap > c8y-cookie-banner > div",
    acceptCookieButton:
      "#app > c8y-bootstrap > c8y-cookie-banner > div > div > div > div.col-md-3 > div > div:nth-child(1) > button",
    userName: "#user",
    password: "#password",

    submitLogin: "button[type=submit]",
    cookieBanner: "#app > c8y-bootstrap > c8y-cookie-banner > div",
    forgotPasswordLink:
      "#app > c8y-bootstrap > c8y-login > div > div > c8y-credentials > form > div:nth-child(6) > a",
    helpAndServiceLink:
      "#app > c8y-bootstrap > c8y-login > div > div > c8y-credentials > form > div:nth-child(6) > a",
  },
  commands: [
    {
      setUser(selector, value) {
        const login_page = this;
        return this;
      },
    },
  ],
};
