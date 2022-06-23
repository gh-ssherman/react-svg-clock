import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';

import Case from '../Clock/subcomponents/Case';

describe('Test <Case /> component', () => {
  test('Should render correctly', async () => {
    const { container } = render(
      <svg>
        <Case />
      </svg>,
    );

    const gradient = container.querySelector('defs')?.querySelector('radialGradient');
    expect(gradient).toBeInTheDocument();

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const feet = group?.querySelectorAll('circle');
    expect(feet).toHaveLength(2);

    const housing = container.querySelector('rect[stroke]');
    expect(housing).toBeInTheDocument();

    await waitFor(() => {
      expect(housing).toHaveAttribute(
        'stroke',
        colors.case,
      );
    });
  });
});
