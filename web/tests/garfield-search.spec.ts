import { test, expect } from '@playwright/test';

test.describe('Garfield Movie Search', () => {
  test('should search for Garfield and verify it appears in the results', async ({ page }) => {
    // Step 1: Navigate to the movies app
    await page.goto('https://debs-obrien.github.io/playwright-movies-app');
    
    // Wait for the page to load
    await expect(page).toHaveTitle('Popular Movies');

    page.getByRole('search').click();
    
    // Step 2: Search for 'Garfield'
    const searchInput = page.getByRole('textbox', { name: 'Search Input' });
    await searchInput.fill('Garfield');
    await page.keyboard.press('Enter');
    
    // Wait for search results to load
    await expect(page).toHaveTitle('Garfield - Search Results');
    
    // Step 3: Verify the movie is in the list
    await expect(page.getByRole('heading', { name: 'Garfield', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'search results', level: 2 })).toBeVisible();
    
    // Verify "The Garfield Movie" appears in the search results
    const moviesList = page.getByRole('list', { name: 'movies' });
    await expect(moviesList).toBeVisible();
    
    const garfieldMovie = page.getByRole('heading', { name: 'The Garfield Movie', level: 2 });
    await expect(garfieldMovie).toBeVisible();
    
    // Verify the movie poster is visible
    const garfieldPoster = page.getByRole('img', { name: 'poster of The Garfield Movie' });
    await expect(garfieldPoster).toBeVisible();
    
    // Verify the movie is clickable (has a link)
    const garfieldLink = page.getByRole('link', { name: /poster of The Garfield Movie.*rating/ });
    await expect(garfieldLink).toBeVisible();
  });
});
