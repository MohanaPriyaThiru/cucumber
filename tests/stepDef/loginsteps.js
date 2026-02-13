const { LoginPage } = require("../pages/loginPage");
const { Given, When, Then } = require("@cucumber/cucumber");
console.log("step file loaded");
let logobj;
Given("user navigates to the the adactin login page", async function () {
  logobj = new LoginPage(this.page);
  await logobj.navigate();
});
When(
  "user enters the userName and Password in the password field",
  async function () {
    await logobj.loginMethod("Trends06208", "Trends@06208");
  },
);
When("user enter the click button", async function () {
  await logobj.click();
});
Then("user navigates to the Login page", async function () {
  await logobj.assertNavigate("pass");
});
