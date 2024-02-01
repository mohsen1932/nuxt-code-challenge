import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import Tag from './Tag.vue'

describe('Tag', () => {
  it('it should render with the given text', async () => {
    await renderSuspended(Tag, {
      props: { text: 'simple tag', isActive: false },
    })
    expect(screen.getByText('simple tag')).toBeDefined()
  })
  it('it should render with active styles if isActive was true', async () => {
    await renderSuspended(Tag, {
      props: { text: 'simple tag', isActive: true },
    })
    expect(screen.getByText('simple tag').getAttribute('class')).toContain(
      'text-blue-800 bg-blue-100 border-blue-200  dark:bg-blue-600 dark:text-white dark:border-blue-500',
    )
  })
})
