import { defineConfig } from '@playwright/test';
export default defineConfig({
  reporter: [['list'], ['junit', { outputFile: 'reports/junit/junit-e2e.xml' }]],
  use: { headless: true }
});
