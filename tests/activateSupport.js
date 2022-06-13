module.exports = {
  "activate support": function (browser) {
    const cookieBanner = "#app > c8y-bootstrap > c8y-cookie-banner > div";
    const acceptCookieButton =
      "#app > c8y-bootstrap > c8y-cookie-banner > div > div > div > div.col-md-3 > div > div:nth-child(1) > button";
    const userName = "#user";
    const cssPasswordInput = "#password";
    const xpathLoginButton = "//button[text()='Log in']";
    const administrationAppLink = "//a[@title='Administration']";
    const userMenu =
      "#app > c8y-bootstrap > div > c8y-header-bar > div > div.header-bar > c8y-user-menu-outlet > div > button";
    const dropdownMenuRight = ".dropdown";
    const appSwitcher = "#appSwitcherDropdown";
    const icon = ".dropdown-menu dropdown-menu-right";
    const userSettingLink =
      "#app > c8y-bootstrap > div > c8y-header-bar > div > div.header-bar > c8y-user-menu-outlet > div > ul > li:nth-child(1) > a";

    const saveButtonGerman = "//button[@title = 'Speichern']";
    const modalContainer = "body > modal-container";

    const userMenuLogoutButton =
      "#app > c8y-bootstrap > div > c8y-header-bar > div > div.header-bar > c8y-user-menu-outlet > div > ul > li:nth-child(4) > a";

    const login_page = browser.page.loginPage();

    login_page
      .navigate()

      //.url("https://regressiond.int2-ram.m2m.telekom.com/")
      .waitForElementPresent("body", 10000, "Be sure that the page is loaded")
      .waitForElementVisible(cookieBanner, 10000, "Cookie banner is presented")
      .click("@acceptCookieButton")

      //click and type input field
      .setValue("@userName", "regressiond")

      //click and type passworld
      .setValue("@password", "Test@12345")

      //browser.useXpath().click(xpathLoginButton);

      .click("button[type=submit]")

      .pause(3 * 1000)
      .click(userMenu)
      .click(userSettingLink)
      //.setValue("#userLang", "Deutsch")

      .saveScreenshot("tests_output/test_screenshots.jpg");

    // .execute("scrollTo(3000,0)")

    // .click(
    //   "body > modal-container > div > div > c8y-user-edit-modal > c8y-modal > div.modal-body > c8y-user-edit > form > div.modal-footer > button.btn.btn-primary"
    // )

    // .click(
    //   "body > modal-container:nth-child(6) > div > div > c8y-confirm-modal > div > div > button.btn.btn-primary"
    // )
    //Assert visible code need

    // .waitForElementPresent(userMenu, 2000, "User menu link is presented")
    // .click(userMenu);

    browser.pause();
    browser.end();
  },
};
