import React from 'react';

/**
 * Hook which returns date-time that updates every 1000ms.
 *
 * @returns JS Date
 */
const useDateTime = (): Date => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const secTimer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return date;
};

export default useDateTime;
