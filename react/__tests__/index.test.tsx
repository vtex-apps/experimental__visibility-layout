import React from 'react'
import { render } from '@vtex/test-tools/react'
import VisibilityLayout from '../Experimental__VisibilityLayout'

describe('VisibilityLayout', () => {
  it('should show children if visible is true', () => {
    const { queryByText } = render(
      <VisibilityLayout visible={true}>
        Foo
      </VisibilityLayout>
    )

    const children = queryByText(/Foo/)

    expect(children).toBeTruthy()
  })

  it('should not show children if visible is false', () => {
    const { queryByText } = render(
      <VisibilityLayout visible={false}>
        Foo
      </VisibilityLayout>
    )

    const children = queryByText(/Foo/)

    expect(children).toBeFalsy()
  })
})
