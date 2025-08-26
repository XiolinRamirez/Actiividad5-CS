import { test, expect } from '@playwright/test';

test('Página de ejemplo tiene título', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/i);
});
