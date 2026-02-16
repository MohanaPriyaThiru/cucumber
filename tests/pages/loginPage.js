const { expect } = require("@playwright/test");
class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");//locator
    this.submitBtn = page.locator('[name="login"]');
    //this.newReg = page.locator('[class="login_register"]');//no need of this line
  }

  async navigate() {
    await this.page.goto("https://adactinhotelapp.com/");//navi
  }

  async loginMethod(UN, Pwd) {
    await this.username.fill(UN);
    await this.password.fill(Pwd);
  }
  async click() {
    await this.submitBtn.click();
    console.log("clicked the login button")
  }
  async assertNavigate(exp) { //new method
    await this.page;
    if (exp === "pass") {
      await expect(this.page).toHaveTitle("Adactin.com - Search Hotel");
    } else {
      await expect(this.page).toHaveTitle(
        "Adactin.com - Hotel Reservation System",
      );
    }
  }
}
module.exports = { LoginPage };
