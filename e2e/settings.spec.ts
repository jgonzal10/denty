import { test, expect } from '@playwright/test';

test('has Settings', async ({ page }) => {
  await page.goto('/settings');
  await page.click('text=Settings')
  await expect(page).toHaveURL('/dashboard/settings')
  await expect(page.locator('h1')).toContainText('Settings')
});
