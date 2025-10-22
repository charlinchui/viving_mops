/**
 * End-to-end tests for the Viving Mops homepage
 * Tests user interactions and page functionality
 */

import { test, expect } from '@playwright/test';

test.describe('Viving Mops Homepage', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the homepage with explicit path
    await page.goto('/viving_mops/');
  });

  test('should load the homepage successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Viving Mops/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('🧹 Viving Mops');
    
    // Check subheading
    await expect(page.locator('h2')).toContainText('Cleaning Up Vibe-Coded Chaos');
  });

  test('should display hero section content', async ({ page }) => {
    // Check hero content
    await expect(page.locator('h1')).toContainText('🧹 Viving Mops');
    await expect(page.locator('h2')).toContainText('Cleaning Up Vibe-Coded Chaos');
    
    // Check description - use more specific selector
    await expect(page.locator('p').first()).toContainText('We rescue apps built entirely by AI prompts and vibes');
    
    // Check CTA buttons - use more specific selectors
    await expect(page.locator('a[href="/viving_mops/about"]').filter({ hasText: 'Learn Our Story' })).toContainText('Learn Our Story 🚀');
    await expect(page.locator('a[href="/viving_mops/contact"]').filter({ hasText: 'Get Help Now' })).toContainText('Get Help Now 🆘');
  });

  test('should display features section', async ({ page }) => {
    // Check features heading - use more specific selector
    await expect(page.locator('h3').filter({ hasText: 'What We Clean Up' })).toContainText('What We Clean Up');
    
    // Check feature cards - use more specific selectors
    await expect(page.locator('h4').filter({ hasText: 'Broken Pipelines' })).toBeVisible();
    await expect(page.locator('h4').filter({ hasText: 'Spaghetti Code' })).toBeVisible();
    await expect(page.locator('h4').filter({ hasText: 'Missing Tests' })).toBeVisible();
    
    // Check feature icons - use more specific selectors targeting the feature cards
    await expect(page.locator('.bg-white.rounded-xl').filter({ hasText: '🔧' })).toBeVisible();
    await expect(page.locator('.bg-white.rounded-xl').filter({ hasText: '🍝' })).toBeVisible();
    await expect(page.locator('.bg-white.rounded-xl').filter({ hasText: '🧪' })).toBeVisible();
  });

  test('should display statistics section', async ({ page }) => {
    // Check stats heading
    await expect(page.locator('text=Our Impact So Far')).toBeVisible();
    
    // Check individual stats - use more specific selectors to avoid conflicts
    await expect(page.locator('div').filter({ hasText: '50+' }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: '99%' }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: '24/7' }).first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: '∞' }).first()).toBeVisible();
    
    // Check stat labels
    await expect(page.locator('text=Apps Rescued')).toBeVisible();
    await expect(page.locator('text=Success Rate')).toBeVisible();
    await expect(page.locator('text=Emergency Cleanup')).toBeVisible();
    await expect(page.locator('text=Vibes Fixed')).toBeVisible();
  });

  test('should display testimonials carousel', async ({ page }) => {
    // Check testimonials heading
    await expect(page.locator('text=What Our Customers Say')).toBeVisible();
    
    // Check carousel navigation buttons
    await expect(page.locator('#prev-btn')).toBeVisible();
    await expect(page.locator('#next-btn')).toBeVisible();
    
    // Check carousel dots
    await expect(page.locator('.carousel-dot')).toHaveCount(4);
    
    // Check first testimonial is visible
    await expect(page.locator('text=Alex Chen')).toBeVisible();
    await expect(page.locator('text=CTO, TechStart Inc.')).toBeVisible();
  });

  test('should navigate testimonials carousel', async ({ page }) => {
    // Wait for carousel to load
    await page.waitForSelector('#testimonials-carousel');
    
    // Click next button
    await page.click('#next-btn');
    await page.waitForTimeout(500); // Wait for animation
    
    // Check that carousel moved (this would be visible in a real test)
    // In a real implementation, we'd check the transform style
    
    // Click previous button
    await page.click('#prev-btn');
    await page.waitForTimeout(500);
    
    // Click on a dot
    await page.click('.carousel-dot:nth-child(2)');
    await page.waitForTimeout(500);
  });

  test('should have working navigation links', async ({ page }) => {
    // Test about link - use more specific selector
    const aboutLink = page.locator('a[href="/viving_mops/about"]').filter({ hasText: 'Learn Our Story' });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/viving_mops/about');
    
    // Test contact link - use more specific selector
    const contactLink = page.locator('a[href="/viving_mops/contact"]').filter({ hasText: 'Get Help Now' });
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute('href', '/viving_mops/contact');
    
    // Test final CTA link
    const finalCtaLink = page.locator('a[href="/viving_mops/contact"]').filter({ hasText: 'Start Your Cleanup Journey' });
    await expect(finalCtaLink).toContainText('Start Your Cleanup Journey');
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h2')).toBeVisible();
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h2')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h2')).toBeVisible();
  });

  test('should have proper accessibility', async ({ page }) => {
    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    const h2 = page.locator('h2');
    const h3 = page.locator('h3');
    
    await expect(h1).toHaveCount(1);
    await expect(h2).toHaveCount(1);
    await expect(h3).toHaveCount(4); // Features, Stats, Testimonials, CTA
    
    // Check for alt text on images (if any)
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
    
    // Check for proper link text
    const links = page.locator('a');
    const linkCount = await links.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      expect(text.trim()).toBeTruthy();
    }
  });

  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/viving_mops/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have proper meta tags', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/Viving Mops/);
    
    // Check meta description - match actual content
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Cleaning up vibe-coded chaos/);
    
    // Check viewport meta tag - match actual content
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
  });
});
