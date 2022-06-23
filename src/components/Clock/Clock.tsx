import React from 'react';

import Case from './subcomponents/Case';
import Display from './subcomponents/Display';

import { ClockProps } from './types';

/**
 * Clock component which displays the current time via simulated 7-segment
 * LED digits (plus an AM/PM indicator).
 *
 * @param date: JS Date
 * @returns Clock rendered as a JSX Element
 */
const Clock: React.FC<ClockProps> = ({ date }): JSX.Element => {
  const width = 400;
  const height = width / 4;
  const centerH = -width / 2;
  const centerV = -height / 2;

  return (
    <svg
      width='100%'
      viewBox={`${centerH} ${centerV} ${width} ${height}`}
      preserveAspectRatio='xMinYMin meet'
    >
      <g>
        <Case
          width={width}
          height={height}
        />
        <Display
          date={date}
          width={width}
          height={height}
        />
      </g>
    </svg>
  );
};

export default Clock;
