module.exports = {
  assertCookiBannerIsVisible: function (browser) {
    const login_page = browser.page.loginPage();

    login_page.navigate();

    //.url("https://regressiond.int2-ram.m2m.telekom.com/")
    browser
      .waitForElementPresent("body", 2000, "Be sure that the page is loaded")
      .waitForElementPresent(
        "#app > c8y-bootstrap > c8y-cookie-banner > div",
        5000,
        "Cookie banner is presented"
      )
      .assert.visible(
        "#app > c8y-bootstrap > c8y-cookie-banner > div > div > div > div.col-md-3 > div > div:nth-child(1) > button"
      )
      .saveScreenshot("screenshots/test_cookieBanner.jpg");

    browser.end();
  },
};
