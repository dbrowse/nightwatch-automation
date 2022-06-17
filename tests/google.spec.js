module.exports = {
  "Google search test": function (browser) {
    let google = browser.page.google();

    google
      .navigate()
      .moveToElement("@acceptCookies", 100, 0)
      .click("@acceptCookies")
      .assert.title("Google")
      .setValue("@searchBar", "nightwatch")
      .click("@submitButton")

      .saveScreenshot("./screenshots/nightwatch_page.png")
      .end();
  },
};
