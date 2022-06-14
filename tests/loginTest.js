module.exports = {
  loginTest: function (browser) {
    let login = browser.page.loginPage();

    login
      .navigate()

      .waitForElementPresent("body", 150000, "Be sure that the page is loaded")
      .waitForElementPresent(
        "@cookieBanner",
        50000,
        "Cookie banner is presented"
      )
      .click("@acceptCookieButton")

      //click and type input field
      .setValue("@userName", "regressiond")

      //click and type passworl
      .setValue("@password", "Test@12345")
      .click("@submitLogin");

    let home = browser.page.homePage();

    // home.assert
    //   .visible("@welcomeToCockpit")

    home.saveScreenshot("./screenshots/homePage_screenshots.png");

    browser.pause();
    browser.end();
  },
};
