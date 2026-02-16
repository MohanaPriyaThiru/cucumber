const { TIMEOUT } = require("dns");

module.exports = {
  default: {
    paths: ["tests/feature/**/*.feature"],
    require: ["tests/stepDef/**/*.js", "tests/support/**/*.js"],
    format: ["progress"],
    TIMEOUT: 80000,
    parallel: 3,
  },
};
