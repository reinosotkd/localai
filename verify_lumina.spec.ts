import { test, expect } from '@playwright/test';

test('verify lumina ai features', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');

  // Check title
  await expect(page).toHaveTitle(/Lumina AI/);

  // Check sidebar and chat list
  const sidebar = page.locator('.sidebar');
  await expect(sidebar).toBeVisible();

  // Check model selector inside input wrapper
  const modelSelect = page.locator('#modelSelect');
  await expect(modelSelect).toBeVisible();

  // Check tools menu
  const plusBtn = page.locator('.plus-btn');
  await plusBtn.click();
  const toolsMenu = page.locator('#toolsMenu');
  await expect(toolsMenu).toBeVisible();

  // Check Google Login button
  const googleBtn = page.locator('.g_id_signin');
  await expect(googleBtn).toBeVisible();

  // Test sending a message (simulated)
  const input = page.locator('#messageInput');
  await input.fill('Hola Lumina');
  const sendBtn = page.locator('#sendBtn');
  await expect(sendBtn).toBeEnabled();

  // Take a screenshot
  await page.screenshot({ path: 'lumina_final.png', fullPage: true });
});
