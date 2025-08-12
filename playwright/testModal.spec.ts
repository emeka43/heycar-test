import { test, expect } from '@playwright/test';

test.describe('Testing app modal', () => {
    test('should open app modal when clicking on the button', async ({ page }) => {
        await page.goto('/camera-photo');
        await page.getByRole('link', { name: 'Apple iCam', exact: true }).click();
        await page.getByText('Please select the address you want to ship to').click();
        await expect(page.getByText('Ship to', { exact: true })).toBeVisible();
        await expect(page.getByText('Shipping Method')).toBeVisible();
        await expect(page.getByText('No shipping options')).toBeVisible();
        await page.selectOption('#CountryId', { label: 'United States of America' });
        // await page.selectOption('#StateProvinceId', { label: 'Texas' });
        await page.getByPlaceholder('Zip / postal code').fill('75097');
        await page.getByRole('button', { name: 'Apply' }).first().click();
        await expect(page.getByText('Shipping:')).toBeVisible();
        await expect(page.getByText('$0.00')).toBeVisible();
        await expect(page.getByText('to United States of America, Texas, 75097 via Ground')).toBeVisible();
    });

});