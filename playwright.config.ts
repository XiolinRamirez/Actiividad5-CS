import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e',
  testMatch: /.*\.spec\.(js|ts)/,
  reporter: [['list'], ['junit', { outputFile: 'reports/junit/junit-e2e.xml' }]],
  use: { headless: true }
});
