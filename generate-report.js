const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/reports/cucumber-json/",
  // Folder where the final HTML report will be created
  reportPath: "cypress/reports/cucumber-html/",
  pageTitle: "Automated Test Script",
  reportName: "Automated Test Script Report",
  metadata: {
    browser: {
      name: "chrome",
      version: "143",
    },

    device: "Local Test Machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "Automated Test Script" },
      { label: "Tester", value: "Aljon Luzadio" },
      { label: "Execution Start Time", value: new Date().toLocaleString() },
    ],
  },
});
