import React from 'react';
import { colors } from '../../../common/constants';

import { ColonProps } from './types';

const pctPosition = {
  colons: [0.225, 0.375],
};

const Colon: React.FC<ColonProps> = ({
  x = 0,
  y = 0,
  height = 12,
}): JSX.Element => (
  <g>
    {pctPosition.colons.map((v) => (
      <circle key={`colon-${v}`} cx={x} cy={y + height * v} r={height * 0.04} fill={colors.digit.on} />
    ))}
  </g>
);

export default Colon;
