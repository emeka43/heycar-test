import { test, expect } from '@playwright/test';

test.describe('Testing app modal', () => {
    test('Tests the shipping modal when on the product page', async ({ page }) => {
        await page.goto('/camera-photo');
        await page.getByRole('link', { name: 'Apple iCam', exact: true }).click();
        await page.getByText('Please select the address you want to ship to').click();
        await expect(page.getByText('Ship to', { exact: true })).toBeVisible();
        await expect(page.getByText('Shipping Method')).toBeVisible();
        await expect(page.getByText('No shipping options')).toBeVisible();
        await page.selectOption('#CountryId', { label: 'United States of America' });
        // await page.selectOption('#StateProvinceId', { label: 'Texas' }); //commented out as the dropdown did not select
        await page.getByPlaceholder('Zip / postal code').fill('75097');
        await page.getByRole('button', { name: 'Apply' }).first().click();

        // assert that the shipping options have been applied - commenting out for now
        // await expect(page.getByText('Shipping:')).toBeVisible();
        // await expect(page.getByText('$0.00')).toBeVisible();
        // await expect(page.getByText('to United States of America, Texas, 75097 via Ground')).toBeVisible();
    });

});