import React from 'react';
import { colors, transition } from '../../../common/constants';

import { AmPmProps } from './types';

const AmPm: React.FC<AmPmProps> = ({
  x = 0,
  y = 0,
  height = 12,
  pm,
}): JSX.Element => {
  const indicators = [{
    text: 'AM',
    fill: pm ? colors.digit.off : colors.digit.on,
    yPos: y + height * 0.10,
  }, {
    text: 'PM',
    fill: pm ? colors.digit.on : colors.digit.off,
    yPos: y + height * 0.22,
  }];

  return (
    <g>
      {indicators.map((v) => (
        <text
          id={v.text.toLowerCase()}
          key={v.text}
          x={x}
          y={v.yPos}
          fontSize={height / 10}
          fill={v.fill}
          style={{ transition }}
        >
          {v.text}
        </text>
      ))}
    </g>
  );
};

export default AmPm;
