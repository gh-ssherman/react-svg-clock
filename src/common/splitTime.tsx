const pad = (num: number) => num.toString().padStart(2, '0');

/**
 * Split a date into an array of individual 12 hour format time digits.
 * Values from the date input, other than hh:mm:ss, are ignored.
 *
 * @param dt: JS Date. i.e. new Date() or new Date(1999, 12, 31, 2, 30, 45).
 * @returns Array of digits [h, h, m, m, s, s]. i.e. [0, 2, 3, 0, 4, 5].
 */
const splitTime = (dt: Date): number[] => {
  const time =
    pad(dt.getHours() % 12 || 12) + pad(dt.getMinutes()) + pad(dt.getSeconds());

  return time.split('').map((v) => parseInt(v, 10));
};

export default splitTime;
