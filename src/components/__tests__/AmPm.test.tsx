import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';

import AmPm from '../Clock/subcomponents/AmPm';

describe('Test <AmPm /> component', () => {
  test('Should render correctly in AM mode', async () => {
    const { container } = render(
      <svg>
        <AmPm pm={false} />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const am = group?.querySelector("text[id^='am']");
    await waitFor(() => {
      expect(am).toHaveAttribute(
        'fill',
        colors.digit.on,
      );
    });

    const pm = group?.querySelector("text[id^='pm']");
    await waitFor(() => {
      expect(pm).toHaveAttribute(
        'fill',
        colors.digit.off,
      );
    });
  });

  test('Should render correctly in PM mode', async () => {
    const { container } = render(
      <svg>
        <AmPm pm />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const am = group?.querySelector("text[id^='am']");
    await waitFor(() => {
      expect(am).toHaveAttribute(
        'fill',
        colors.digit.off,
      );
    });

    const pm = group?.querySelector("text[id^='pm']");
    await waitFor(() => {
      expect(pm).toHaveAttribute(
        'fill',
        colors.digit.on,
      );
    });
  });
});
