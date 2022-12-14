import { test, expect } from '@playwright/test';

test('homepage has DashAdmin in title and `settings` link linking to the settings page', async ({
  page,
}) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DashAdmin/);

  // create a locator
  const settings = page.locator('text=Settings');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(settings).toHaveAttribute('href', '/settings');

  // Click the get started link.
  await settings.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*intro/);
  await expect(page).toHaveURL(/settings/);
});
