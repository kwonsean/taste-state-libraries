import { useSetAtom } from 'jotai';
import { countAtom } from './atoms';

function CountUpBtn() {
  const setCount = useSetAtom(countAtom);

  return (
    <button
      onClick={() => setCount(prev => prev + 1)}
      style={{ width: '20px' }}>
      +
    </button>
  );
}

export default CountUpBtn;
