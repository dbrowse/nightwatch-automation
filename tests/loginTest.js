module.exports = {
  css: function (browser) {
    const userMenuLogoutButton =
      "#app > c8y-bootstrap > div > c8y-header-bar > div > div.header-bar > c8y-user-menu-outlet > div > ul > li:nth-child(4) > a";

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

    home.assert
      .visible("@welcomeToCockpit")

      .saveScreenshot("./screenshots/homePage_screenshots.png");

    browser.pause();
    browser.end();
  },
};
