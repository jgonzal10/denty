import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/products/16/productWithdrawn');
});


test.describe('Withdrawing', () => {


  test('should withdraw 2 products from compartment', async ({ page }) => {
    const withdraw = page.getByTestId('value').nth(16);
    await expect(page).toHaveURL('/products/16/productWithdrawn')

  });


});