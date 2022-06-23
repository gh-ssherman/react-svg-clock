import React from 'react';
import { colors } from '../../../common/constants';

import { FootProps } from './types';

const Foot: React.FC<FootProps> = ({
  id,
  x = 0,
  y = 0,
  r = 18,
}): JSX.Element => {
  const clipId = `${id}-clip`;

  return (
    <svg>
      <defs>
        <clipPath id={clipId}>
          <rect x={x - r} y={y + r * 0.38} width={r * 2} height={r * 0.4} />
        </clipPath>
      </defs>
      <circle cx={x} cy={y} r={r} fill={colors.feet} clipPath={`url(#${clipId})`} />
    </svg>
  );
};

export default Foot;
