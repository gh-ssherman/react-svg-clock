export interface AmPmProps {
  x?: number;
  y?: number;
  height?: number;
  pm: boolean;
}

export interface CaseProps {
  width?: number;
  height?: number;
}

export interface ColonProps {
  x?: number;
  y?: number;
  height?: number;
}

export interface DigitProps {
  x?: number;
  y?: number;
  height?: number;
  value?: number | 'off';
}

export interface DisplayProps {
  width?: number;
  height?: number;
  date: Date;
}

export interface FootProps {
  id: string;
  x?: number;
  y?: number;
  r?: number;
}
