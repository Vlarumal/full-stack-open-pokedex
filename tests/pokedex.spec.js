const {
  test,
  describe,
  expect,
  beforeEach,
} = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.'
      )
    ).toBeVisible()
  })

  test('can navigate to a link of a Pokemon', async ({ page }) => {
    await page.getByRole('link', { name: 'ivysaur' }).click()
    await expect(page).toHaveURL('/pokemon/ivysaur')
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
