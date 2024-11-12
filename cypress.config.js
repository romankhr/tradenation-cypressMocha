const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

function deleteReportsFolder() {
  const reportsPath = path.join(__dirname, "cypress/reports");

  if (fs.existsSync(reportsPath)) {
    fs.readdirSync(reportsPath).forEach((file) => {
      const curPath = path.join(reportsPath, file);
      if (file !== "merged-report.json" && fs.statSync(curPath).isFile()) {
        console.log(`Deleting file: ${curPath}`);
        fs.unlinkSync(curPath);
      }
    });
  }
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("before:run", () => {
        deleteReportsFolder();
      });
      on("after:run", () => {
        try {
          execSync("npm run merge-report", { stdio: "inherit" });
        } catch (error) {
          console.error("Failed to run the merge-report script:", error);
        }
      });
      on("after:screenshot", (details) => {
        console.log(`Screenshot taken: ${details.path}`);
        const videoPath = details.test.screenshotPath.replace("screenshots", "videos").replace(".png", ".mp4");
        console.log(`Video path: ${videoPath}`);
      });
    },
    specPattern: "cypress/e2e/**/*.js", 
    reporter: "cypress-multi-reporters", 
    reporterOptions: {
      reporterEnabled: "mochawesome", 
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports", 
        overwrite: false, 
        html: true, 
        json: true,
        inline: true, 
      },
    },
    video: true,
    screenshotsFolder: "cypress/screenshots", 
    videosFolder: "cypress/videos", 
    trashAssetsBeforeRuns: true, 
    screenshotOnRunFailure: true, 
  },
});
