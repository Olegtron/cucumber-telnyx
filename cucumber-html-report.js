const report = require("cucumber-html-reporter");

report.generate({
  jsonDir: "jsonlogs",
  reportPath: "./reports/cucumber-htmlreport",
  metadata: {
    browser: {
      name: "chrome",
      version: "104",
    },
    device: "Local",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
});