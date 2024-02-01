import { describe, it, expect } from 'vitest'
import { mockNuxtImport, renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import Header from './Header.vue'

mockNuxtImport('useCart', () => {
  return () => {
    return {
      $state: {
        items: [
          {
            title: 'Electronic Frozen Shirt',
            price: 44222,
            description:
              'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
            material: 'Granite',
            image:
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/440.jpg',
            id: '12',
          },
          {
            title: 'Incredible Frozen Bike',
            price: 45337,
            description:
              'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
            material: 'Bronze',
            image:
              'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/127.jpg',
            id: '38',
          },
        ],
      },
    }
  }
})

describe('Header', () => {
  it('it should render without crash', async () => {
    await renderSuspended(Header)
    expect(screen.getByText('Products')).toBeDefined()
  })

  it('it should render the length of items in the cart', async () => {
    await renderSuspended(Header)
    expect(screen.getByTestId('header-cart-badge')).toBeDefined()
    expect(screen.getByText('2')).toBeDefined()
  })
})
