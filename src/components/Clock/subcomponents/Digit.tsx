import React from 'react';
import { colors, transition } from '../../../common/constants';

import { DigitProps } from './types';

const segments = {
  encoding: [
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
  ],
  points: [
    '1, 1  2, 0  8, 0  9, 1  8, 2  2, 2',
    '9, 1 10, 2 10, 8  9, 9  8, 8  8, 2',
    '9, 9 10,10 10,16  9,17  8,16  8,10',
    '9,17  8,18  2,18  1,17  2,16  8,16',
    '1,17  0,16  0,10  1, 9  2,10  2,16',
    '1, 9  0, 8  0, 2  1, 1  2, 2  2, 8',
    '1, 9  2, 8  8, 8  9, 9  8,10  2,10',
  ],
};

const Digit: React.FC<DigitProps> = ({
  x = 0,
  y = 0,
  height = 60,
  value = 'off',
}): JSX.Element => {
  const encodingMap = segments.encoding[value === 'off' ? 10 : value];

  return (
    <svg x={x} y={y} height={height * 0.6} viewBox='-1 -1 12 20'>
      <g>
        {segments.points.map((v, i) => {
          const segmentId = (i + 10).toString(36);
          return (
            <polygon
              id={`segment-${segmentId}`}
              key={`segment-${segmentId}`}
              points={v}
              fill={encodingMap[i] ? colors.digit.on : colors.digit.off}
              style={{ transition }}
            />
          );
        })}
      </g>
    </svg>
  );
};

export default Digit;
