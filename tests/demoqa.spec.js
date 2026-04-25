import { test, expect } from '@playwright/test';

test('DemoQA test', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    
    await page.locator('//input[@id="firstName"]').fill('Prikshit');
 await expect(page.locator('//input[@id="firstName"]')).toHaveValue('Prikshit');

    await page.locator('//input[@id="lastName"]').fill('Singh');
    await expect(page.locator('//input[@id="lastName"]')).toHaveValue('Singh');

    await page.locator('//input[@id="userEmail"]').fill('prikshitt1234@gmail.com');
    await expect(page.locator('//input[@id="userEmail"]')).toHaveValue('prikshitt1234@gmail.com');

    await page.locator('//input[@id="gender-radio-1"]').click();
        await expect(page.locator('//input[@id="gender-radio-1"]')).toBeChecked();

    await page.locator('//input[@id="userNumber"]').fill('1234455490');
 await expect(page.locator('//input[@id="userNumber"]')).toHaveValue('1234455490');


    await page.locator('//input[@id="dateOfBirthInput"]').click();
    await page.locator('//input[@id="subjectsInput"]').fill('Maths physics chemistry');
    // await expect(page.locator('//input[@id="subjectsInput"]')).toContainValue('Maths physics chemistry');

    await page.locator('//input[@id="hobbies-checkbox-3"]').click();
    await page.locator('//input[@id="uploadPicture"]').setInputFiles("C:\\Users\\Asus\\Desktop\\New folder (2)\\WhatsApp Image 2026-04-22 at 4.51.03 PM.jpeg");

    await page.locator('//textarea[@id="currentAddress"]').fill('Pathankot, Punjab 145001');
     await expect(page.locator('//textarea[@id="currentAddress"]')).toHaveValue('Pathankot, Punjab 145001');

    await page.locator('//input[@id="react-select-3-input"]').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter'); 
    await page.locator('//input[@id="react-select-4-input"]').click();
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');


    await expect(page.locator('//button[@id="submit"]')).toBeVisible();
    await page.locator('//button[@id="submit"]').click();
});