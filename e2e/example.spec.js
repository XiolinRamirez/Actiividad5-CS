const { test, expect } = require('@playwright/test');

test('Example.com tiene el título correcto', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/i);
});
