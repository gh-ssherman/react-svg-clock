import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';

import Digit from '../Clock/subcomponents/Digit';

const segmentIds = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

describe('Test <Digit /> component', () => {
  test("Should render all 7 segments as off for value 'off'", async () => {
    const { container } = render(
      <svg>
        <Digit />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const segments = group?.querySelectorAll("polygon[id^='segment-']");
    expect(segments).toHaveLength(7);

    await waitFor(() => {
      segmentIds.forEach((v) => expect(group?.querySelector(`#segment-${v}`)).toHaveAttribute(
        'fill',
        colors.digit.off,
      ));
    });
  });

  test("Should render all 7 segments as on for value '8'", async () => {
    const { container } = render(
      <svg>
        <Digit value={8} />
      </svg>,
    );

    const group = container.querySelector('g');
    expect(group).toBeInTheDocument();

    const segments = group?.querySelectorAll("polygon[id^='segment-']");
    expect(segments).toHaveLength(7);

    await waitFor(() => {
      segmentIds.forEach((v) => expect(group?.querySelector(`#segment-${v}`)).toHaveAttribute(
        'fill',
        colors.digit.on,
      ));
    });
  });
});
