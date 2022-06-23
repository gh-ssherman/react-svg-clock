import React from 'react';
import { colors } from '../../../common/constants';

import Foot from './Foot';

import { CaseProps } from './types';

const pctPosition = {
  feet: [0.2, 0.8],
};

const Case: React.FC<CaseProps> = ({
  width = 400,
  height = 100,
}): JSX.Element => {
  const centerH = -width / 2;
  const centerV = -height / 2;
  const margin = width * 0.01;
  const gapFeet = width * 0.02;
  const gradientId = 'reflective-glare';

  return (
    <svg
      x={centerH}
      y={centerV}
    >
      <defs>
        <radialGradient
          id={gradientId}
          cx='50%'
          cy='0%'
          fx='50%'
          fy='0%'
          r='50%'
        >
          <stop
            offset={0}
            stopColor={colors.face}
            stopOpacity={0.35}
          />
          <stop
            offset={1}
            stopColor={colors.face}
            stopOpacity={1}
          />
        </radialGradient>
      </defs>
      <g>
        {pctPosition.feet.map((v, i) => (
          <Foot
            id={`foot-${i}`}
            key={`foot-${v}`}
            x={width * v}
            y={height - (margin * 2 + gapFeet)}
            r={width / 22}
          />
        ))}
        <rect
          x={margin}
          y={margin}
          width={width - margin * 2}
          height={height - (margin * 2 + gapFeet)}
          rx={width / 16.67}
          ry={height / 2}
          fill={`url(#${gradientId})`}
          stroke={colors.case}
          strokeWidth={width / 66.67}
        />
      </g>
    </svg>
  );
};

export default Case;
