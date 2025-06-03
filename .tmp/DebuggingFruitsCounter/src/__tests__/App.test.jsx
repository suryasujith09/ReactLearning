import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App'

describe(':::RJSCPHIZTC_TEST_SUITE_1:::Fruits Counter tests', () => {
  const renderComponent = jsx => {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    }
  }
  it(':::RJSCPHIZTC_TEST_1:::Page should initially consist of HTML main heading element with text content as "Bob ate 0 mangoes 0 bananas":::5:::', () => {
    renderComponent(<App />)
    expect(
      screen.getByRole('heading', {
        name: /Bob ate 0 mangoes 0 bananas/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPHIZTC_TEST_2:::Page should consist of HTML image element with alt attribute value as "mango":::5:::', () => {
    renderComponent(<App />)
    expect(
      screen.getByRole('img', {
        name: /mango/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPHIZTC_TEST_3:::Page should consist of HTML image element with alt attribute value as "banana":::5:::', () => {
    renderComponent(<App />)
    expect(
      screen.getByRole('img', {
        name: /banana/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPHIZTC_TEST_4:::Page should consist of HTML button element with text content as "Eat Banana":::5:::', () => {
    renderComponent(<App />)
    expect(
      screen.getByRole('button', {
        name: /Eat Banana/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPHIZTC_TEST_5:::Page should consist of HTML button element with text content as "Eat Mango":::5:::', () => {
    renderComponent(<App />)
    expect(
      screen.getByRole('button', {
        name: /Eat Mango/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPHIZTC_TEST_6:::When the "Eat Mango" button is clicked, the count of the mangoes eaten should be incremented by one:::5:::', async () => {
    const {user} = renderComponent(<App />)
    await user.click(
      screen.getByRole('button', {
        name: /Eat Mango/i,
        exact: false,
      }),
    )
    expect(
      screen.getByRole('heading', {
        name: /1 mangoes/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })

  it(':::RJSCPHIZTC_TEST_7:::When the "Eat Banana" button is clicked, the count of the bananas eaten should be incremented by one:::5:::', async () => {
    const {user} = renderComponent(<App />)
    await user.click(
      screen.getByRole('button', {
        name: /Eat Banana/i,
        exact: false,
      }),
    )
    expect(
      screen.getByRole('heading', {
        name: /1 bananas/i,
        exact: false,
      }),
    ).toBeInTheDocument()
  })
})
