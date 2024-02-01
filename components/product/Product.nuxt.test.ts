import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import Product from './Product.vue'

describe('Product', () => {
  it('it should render with the given product data', async () => {
    await renderSuspended(Product, {
      props: {
        product: {
          title: 'Electronic Frozen Shirt',
          price: 44222,
          description:
            'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
          material: 'Granite',
          image:
            'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/440.jpg',
          id: '12',
        },
      },
    })
    expect(screen.getByText('Electronic Frozen Shirt')).toBeDefined()
    expect(screen.getByText('Granite')).toBeDefined()
    expect(screen.getByText('$44222')).toBeDefined()
    expect(screen.getByTestId('product-link')).toBeDefined()
    expect(screen.getByTestId('product-link').getAttribute('href')).toEqual(
      '/product/12',
    )
  })
})
