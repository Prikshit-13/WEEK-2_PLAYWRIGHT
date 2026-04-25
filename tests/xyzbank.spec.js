import{test,expect} from '@playwright/test';
test('xyzbanktest', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
    await expect(page).toHaveURL('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');

    await page.getByRole('button', { name: 'Add Customer' }).click();
    await page.getByPlaceholder('First Name').fill('Prikshit');
    await expect(page.getByPlaceholder('First Name')).toHaveValue('Prikshit');
    await page.getByPlaceholder('Last Name').fill('Singh');
    await expect(page.getByPlaceholder('Last Name')).toHaveValue('Singh');
    await page.getByPlaceholder('Post Code').fill('145001');
    await expect(page.getByPlaceholder('Post Code')).toHaveValue('145001');
    await page.locator('//button[@type="submit"]').click();


    //open account
    await page.getByRole('button', { name: 'Open Account' }).click();
    await page.locator('//select[@name="userSelect"]').selectOption('6');
    await page.locator('//select[@name="currency"]').selectOption('Rupee');
    await page.locator('//button[@type="submit"]').click();

    //customers
    await page.getByRole('button', { name: 'Customers' }).click();
   let name = page.getByRole('cell', { name: 'Prikshit Singh' });
   //home page
    await page.locator('//button[@class="btn home"]').click();

    await page.waitForTimeout(2000);
    await page.locator('//button[@ng-click="customer()"]').click();
    await page.locator('//select[@name="userSelect"]').selectOption('6');
    await page.locator('//button[@type="submit"]').click(); 

    await page.locator('//button[@ng-click="deposit()"]').click();
      await page.waitForTimeout(5000);
    await page.locator('//input[@placeholder="amount"]').fill('1000');
    await page.locator('//button[@type="submit"]').click();
    await page.locator('//button[@ng-click="withdrawl()"]').click();
      await page.waitForTimeout(5000);
    await page.locator('//input[@placeholder="amount"]').fill('500');
  
    let balance= await page.locator('(//strong[@class="ng-binding"])[2]').allInnerTexts();

    await page.locator('//button[@type="submit"]').click();
    await page.locator('//button[@ng-click="transactions()"]').click();
    console.log("Balance:",balance);

});