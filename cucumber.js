const { TIMEOUT } = require("dns");

module.exports = {
  default: {
    paths: ["tests/feature/**/*.feature"],
    require: ["tests/stepDef/**/*.js", "tests/support/**/*.js"],
    format: ["progress", "allure-cucumberjs/reporter"],
    TIMEOUT: 80000,
    parallel: 3,
  },
};
