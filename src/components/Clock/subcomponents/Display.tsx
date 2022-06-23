import React from 'react';
import splitTime from '../../../common/splitTime';

import AmPm from './AmPm';
import Digit from './Digit';
import Colon from './Colon';

import { DisplayProps } from './types';

const pctPosition = {
  digits: [0.15, 0.25, 0.4, 0.5, 0.65, 0.75],
  colons: [0.325, 0.575],
  ampm: 0.84,
};

const Display: React.FC<DisplayProps> = ({
  date,
  width = 100,
  height = 60,
}): JSX.Element => {
  const centerH = -width / 2;
  const centerV = -height / 2;
  const margin = width * 0.01;
  const gapFeet = width * 0.02;
  const currTimeDigits = splitTime(date);

  return (
    <svg x={centerH} y={centerV}>
      <g>
        {pctPosition.digits.map((v, i) => (
          <Digit
            key={`digit-${v}`}
            x={centerH + width * v}
            y={margin * 2 + gapFeet}
            height={height}
            value={
              i === 0 && currTimeDigits[0] === 0 ? 'off' : currTimeDigits[i]
            }
          />
        ))}
        {pctPosition.colons.map((v) => (
          <Colon
            key={`colon-${v}`}
            x={width * v}
            y={margin * 2 + gapFeet}
            height={height}
          />
        ))}
        <AmPm
          x={width * pctPosition.ampm}
          y={margin * 2 + gapFeet}
          height={height}
          pm={date.getHours() >= 12}
        />
      </g>
    </svg>
  );
};

export default Display;
