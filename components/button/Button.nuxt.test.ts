import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import Button from './Button.vue'

describe('Button', () => {
  it('it should render with the given label', async () => {
    await renderSuspended(Button, { props: { label: 'simple label' } })
    expect(screen.getByText('simple label')).toBeDefined()
  })
})
