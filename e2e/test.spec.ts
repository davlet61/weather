import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByLabel('Get data for another city:').click();
  await page.getByLabel('Get data for another city:').fill('london');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Choose a date:').fill('2022-12-13');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Get data for another city:').click();
  await page.getByLabel('Get data for another city:').fill('stockholm');
  await page.getByLabel('Choose a date:').fill('2022-12-05');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('img').click({
    position: {
      x: 711,
      y: 302,
    },
  });
  await page.getByRole('img').click({
    position: {
      x: 763,
      y: 316,
    },
  });
  await page.getByRole('img').click({
    position: {
      x: 33,
      y: 329,
    },
  });
});
