import './styles.css'; // eslint-disable-line
import useDateTime from './hooks/useDateTime';

import { Clock } from './components/Clock';

export default function App() {
  const date = useDateTime();

  return (
    <div className='react-svg-clock'>
      <Clock date={date} />
    </div>
  );
}
