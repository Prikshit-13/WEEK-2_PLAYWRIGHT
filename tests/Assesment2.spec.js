import { test, expect } from '@playwright/test';

test('vtechtest', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/demo-site/');
    await expect(page).toHaveURL('https://vinothqaacademy.com/demo-site/');

    await page.locator('//input[@id="vfb-5"]').fill('Prikshit');
    await expect(page.locator('//input[@id="vfb-5"]')).toHaveValue('Prikshit');

    await page.locator('//input[@id="vfb-7"]').fill('Singh');
    await expect(page.locator('//input[@id="vfb-7"]')).toHaveValue('Singh');

    await page.locator('//input[@id="vfb-31-1"]').click();
    await expect(page.locator('//input[@id="vfb-31-1"]')).toBeChecked();
    await page.locator('//input[@id="vfb-20-0"]').click();
    await page.locator('//input[@id="vfb-20-1"]').click();
    await page.locator('//input[@id="vfb-20-2"]').click();

    await page.locator('//input[@id="vfb-13-address"]').fill('gandhinagar street');
    await expect(page.locator('//input[@id="vfb-13-address"]')).toHaveValue('gandhinagar street');
    await page.locator('//input[@name="vfb-13[address-2]"]').fill('House no.816');
    await page.locator('//input[@id="vfb-13-city"]').fill('Pathankot');
    await page.locator('//input[@id="vfb-13-state"]').fill('Punjab');
    await page.locator('//input[@id="vfb-13-zip"]').fill('145001');
    await page.locator('(//span[@class="select2-selection select2-selection--single"])[1]').click();
    await page.locator('//input[@class="select2-search__field"]').fill('India');
    await page.keyboard.press('Enter');
    await expect(page.locator('(//span[@class="select2-selection select2-selection--single"])[1]')).toContainText('India');

    await page.locator('//input[@id="vfb-14"]').fill('prikshitsingh123@gmail.com');
    await expect(page.locator('//input[@id="vfb-14"]')).toHaveValue('prikshitsingh123@gmail.com');
    await page.locator('//input[@id="vfb-18"]').fill('04/16/2026');
    await page.keyboard.press('Enter');

   await page.locator('(//span[@class="select2-selection select2-selection--single"])[2]').click();
    await page.locator('//input[@class="select2-search__field"]').fill('10');
    await page.keyboard.press('Enter');
     await page.locator('(//span[@class="select2-selection select2-selection--single"])[3]').click();
    await page.locator('//input[@class="select2-search__field"]').fill('25');
    await page.keyboard.press('Enter');

    await page.locator('//input[@id="vfb-19"]').fill('1234455490');
    await expect(page.locator('//input[@id="vfb-19"]')).toHaveValue('1234455490');
    await page.locator('//textarea[@id="vfb-23"]').fill('no query');
    await page.locator('//input[@id="vfb-3"]').fill('42');
    await page.locator('//input[@id="vfb-4"]').click();

    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('screenshot.png');
})
