import { test, expect, type Page } from '@playwright/test';

test.describe('Withdrawing actions', () => {

  test('should not withdraw products quantity from compartment when there are enough products', async ({ page }) => {

    //Try to Perform withdraw
    await page.goto('/dashboard/products/15/productWithdrawn')
    const quantityLocator =page.getByTestId("quantity")
    const currentQuantity =await quantityLocator.inputValue()
    const unitsWithdrawn = parseInt(currentQuantity)+1;

    await page.getByTestId("withdrawQuantity").fill(unitsWithdrawn.toString())
    await page.getByTestId("withdrawButton").click()
    const updatedQuantity =await quantityLocator.inputValue()
    expect(currentQuantity).toEqual(updatedQuantity)

  });
  
  test('should withdraw 2 products from compartment', async ({ page }) => {

    //Perform withdraw
    await page.goto('/dashboard/products/16/productWithdrawn')
    const quantityLocator =page.getByTestId("quantity")
    const currentQuantity =await quantityLocator.inputValue()
    const unitsWithdrawn = "2"
    await page.getByTestId("withdrawQuantity").fill(unitsWithdrawn)
    await page.getByTestId("withdrawButton").click()
    const totalQuantity =parseInt(currentQuantity)-parseInt(unitsWithdrawn)

    await page.goto('/dashboard/products/16/productWithdrawn')
    const updatedQuantity =await quantityLocator.inputValue()
    expect(totalQuantity.toString()).toEqual(updatedQuantity)

  });


});