import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';
import splitTime from '../../common/splitTime';

import Display from '../Clock/subcomponents/Display';

describe('Test <Display /> component', () => {
  test('Should return correct result from splitTime function for date with AM time', () => {
    expect(splitTime(new Date(1999, 12, 31, 2, 30, 45))).toEqual([
      0, 2, 3, 0, 4, 5,
    ]);
  });

  test('Should return correct result from splitTime function for date with noon time', () => {
    expect(splitTime(new Date(1999, 12, 31, 12, 0, 0))).toEqual([
      1, 2, 0, 0, 0, 0,
    ]);
  });

  test('Should render 2:30:30am correctly', async () => {
    const { container } = render(
      <svg>
        <Display date={new Date(1999, 12, 31, 2, 30, 30)} />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const segments = group?.querySelectorAll("polygon[id^='segment-']");
    expect(segments).toHaveLength(6 * 7);

    const dots = group?.querySelectorAll('circle');
    expect(dots).toHaveLength(4);

    const indicators = group?.querySelectorAll('text');
    expect(indicators).toHaveLength(2);

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

  test('Should render 12:30:30pm correctly', async () => {
    const { container } = render(
      <svg>
        <Display date={new Date(1999, 12, 31, 12, 30, 30)} />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const segments = group?.querySelectorAll("polygon[id^='segment-']");
    expect(segments).toHaveLength(6 * 7);

    const dots = group?.querySelectorAll('circle');
    expect(dots).toHaveLength(4);

    const indicators = group?.querySelectorAll('text');
    expect(indicators).toHaveLength(2);

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
