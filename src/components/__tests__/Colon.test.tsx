import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';

import Colon from '../Clock/subcomponents/Colon';

describe('Test <Colon /> component', () => {
  test('Should render as two circles with proper color', async () => {
    const { container } = render(
      <svg>
        <Colon />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const dots = group?.querySelectorAll('circle');
    expect(dots).toHaveLength(2);

    await waitFor(() => {
      dots?.forEach((v) => expect(v).toHaveAttribute(
        'fill',
        colors.digit.on,
      ));
    });
  });
});
