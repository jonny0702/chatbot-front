
import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Home } from '../../Components/Home';

describe('<Home /> Component', () => {
  test('Home mounts properly', () => {
    const HomeComponent = render(<Home />)
    expect(HomeComponent.container).toBeTruthy()
  })
});
