module.exports = {
  css: function (browser) {
    browser.url("https://javed1.latest.stage.c8y.io/");

    const cssLoginInput = "#user";
    const cssPasswordInput = "#password";
    const xpathLoginButton = "//button[text()='Log in']";
    const administrationAppLink = "//a[@title='Administration']";
    const userMenu =
      "//span[@class='d-inline-block hidden-xs text-truncate m-r-8']";
    const dropdownMenuRight = ".d-inline-block hidden-xs text-truncate m-r-8";
    const appSwitcher = "#appSwitcherDropdown";

    //click and type input field
    browser.setValue(cssLoginInput, "dido");

    //click and type passworld
    browser.setValue(cssPasswordInput, "Parola@12345");

    //browser.useXpath().click(xpathLoginButton);

    browser.click("button[type=submit]", function (result) {
      this.assert.strictEqual(result.status, 0);
    });

    browser.click(appSwitcher);
    browser.click(administrationAppLink);
    //browser.click(userMenu);
    //browser.click(dropdownMenuRight);

    browser.pause();

    // browser.pause(5 * 1000);
    // browser.end();
  },
};
