import { defineConfig } from 'cypress';
import path from 'path';
import fs from 'fs';

const cleanReportDirectory = (dir: string) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        cleanReportDirectory(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });
  }
};

const reportDir = 'report/cypress/e2e';
cleanReportDirectory(reportDir);

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
  },
  reporter: 'cypress-sonarqube-reporter',
  reporterOptions: {
    outputDir: reportDir,
    fileName: `test-report-${new Date().toISOString().replace(/[:.]/g, '-')}.xml`,
  },
});
