import { describe, it, expect } from 'vitest'
import { mockNuxtImport, renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import CartTable from './CartTable.vue'

mockNuxtImport('useCart', () => {
  return () => {
    return {
      $state: {
        total: 134896,
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
            count: 1
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
            count: 2
          },
        ],
      },
    }
  }
})

describe('CartTable', () => {
  it('it should render without crash', async () => {
    await renderSuspended(CartTable)
    expect(screen.getByText('Product:')).toBeDefined()
    expect(screen.getByText('Total:')).toBeDefined()
  })

  it('it should render with data of the items in the cart', async () => {
    await renderSuspended(CartTable)
    expect(screen.getByText('Electronic Frozen Shirt')).toBeDefined()
    expect(screen.getByText('Incredible Frozen Bike')).toBeDefined()
    expect(screen.getAllByText('$44222')).toHaveLength(2)
    expect(screen.getByText('$90674')).toBeDefined()
    expect(screen.getByText('$45337')).toBeDefined()
    expect(screen.getByText('$134896')).toBeDefined()
  })
})
