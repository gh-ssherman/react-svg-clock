import { render, waitFor } from '@testing-library/react';
import { colors } from '../../common/constants';

import { Clock } from '../Clock';

describe('Test <Clock /> component', () => {
  test('Should render correctly', async () => {
    const { container } = render(
      <svg>
        <Clock date={new Date(1999, 12, 31, 12, 30, 30)} />
      </svg>,
    );

    const pm = container?.querySelector("text[id^='pm']");
    await waitFor(() => {
      expect(pm).toHaveAttribute(
        'fill',
        colors.digit.on,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
