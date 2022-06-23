import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';

import Foot from '../Clock/subcomponents/Foot';

describe('Test <Foot /> component', () => {
  test('Should render as a circle with proper color', async () => {
    const { container } = render(
      <svg>
        <Foot id='foot-id' />
      </svg>,
    );

    const foot = container.querySelector('circle');
    expect(foot).toBeInTheDocument();

    await waitFor(() => {
      expect(foot).toHaveAttribute(
        'fill',
        colors.feet,
      );
    });
  });
});
