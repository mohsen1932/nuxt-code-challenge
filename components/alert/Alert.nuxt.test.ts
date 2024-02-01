import { describe, it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import Alert from './Alert.vue'

describe('Alert', () => {
  it('it should render with the given text', async () => {
    await renderSuspended(Alert, { props: { text: 'simple text' } })
    expect(screen.getByText('simple text')).toBeDefined()
  })
})
