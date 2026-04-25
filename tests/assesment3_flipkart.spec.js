import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';

test('flipkart_offers', async ({ page, context }) => {

    await page.goto('https://www.flipkart.com/');
    await expect(page).toHaveURL(/flipkart/); 

    await page.locator('//span[@class="b3wTlE"]').click();
    await expect(page.locator('//span[@class="b3wTlE"]')).toBeHidden(); 

    await page.getByRole('link', { name: 'Home' }).first().click();
    await expect(page).toHaveURL(/flipkart/); 

    await page.waitForLoadState('networkidle');

    await page.locator('(//a[@class="_3n8fna1co _3n8fna10j _3n8fnaod _3n8fna1 _3n8fnac7 _1i2djtb9 _1i2djtk9 _1i2djtir _1i2djtja _1i2djtjb"])[2]').click();

    await page.locator('text=4★ & above').click();
    await expect(page.locator('text=4★ & above')).toBeVisible(); 

    await page.waitForLoadState('networkidle');

    await page.locator('text=Price -- Low to High').click();
    await expect(page.locator('text=Price -- Low to High')).toBeVisible(); 

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//a[@class="pIpigb"])[5]').click()
    ]);

    await newPage.waitForLoadState('networkidle');
    await newPage.waitForLoadState('domcontentloaded');

    await newPage.waitForSelector('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]');

    const productName = await newPage.locator('//h1[@class="v1zwn21l v1zwn26 _1psv1zeb9 _1psv1ze0"]').innerText();
    const productPrice = await newPage.locator('//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]').innerText();
    const productRating = await newPage.locator('//div[@class="css-146c3p1"]').first().innerText();

    console.log('Product Name:', productName);
    console.log('Product Price:', productPrice);
    console.log('Product Rating:', productRating);

    await expect(productName).not.toBeNull(); 
    await expect(productName.length).toBeGreaterThan(3);
 
    await expect(productPrice.length).toBeGreaterThan(1); 

    await expect(productRating).not.toBeNull(); 

    let book = new ExcelJS.Workbook();
    await book.xlsx.readFile('C:/Users/Asus/Desktop/PLAYWRIGHT ADVANCE/DDT/book1.xlsx');

    let sheet = book.getWorksheet("Sheet1");

    expect(sheet).toBeDefined(); 

    sheet.getRow(2).getCell(1).value = productName;
    sheet.getRow(2).getCell(2).value = productPrice;
    sheet.getRow(2).getCell(3).value = productRating;

    await book.xlsx.writeFile('C:/Users/Asus/Desktop/PLAYWRIGHT ADVANCE/DDT/book1.xlsx');

    await newPage.locator('(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a"])[4]');
    
    await expect(newPage).not.toBeNull(); 

    await newPage.close();
});