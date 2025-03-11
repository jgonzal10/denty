import { test, expect } from '@playwright/test';

test.describe('Should test compartments', () => {

  test('should test that all compartments are loaded', async ({ page }) => {

    await page.goto('/dashboard/products')
    const compartmentsInPage = await page.getByRole('listitem').count();
    const compartments = 16;
    expect(compartmentsInPage).toEqual(compartments)
    
  });

  test('should click a compartment and make 1 withdrawal', async ({ page }) => {

    await page.goto('/dashboard/products')
    const compartments = await page.getByRole('listitem').nth(1).click();

    const quantityLocator =page.getByTestId("quantity")
    const currentQuantity =await quantityLocator.inputValue()
    const unitsWithdrawn = "1"
    await page.getByTestId("withdrawQuantity").fill(unitsWithdrawn)
    await page.getByTestId("withdrawButton").click()
    const totalQuantity =parseInt(currentQuantity)-parseInt(unitsWithdrawn)
    
  });
  
});