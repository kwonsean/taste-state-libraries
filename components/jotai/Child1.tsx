import { useAtom } from 'jotai';
import { countAtom } from './atoms';
import Child2 from './Child2';

function Child1() {
  return (
    <div
      style={{
        border: '1px solid green',
        height: '400px',
      }}>
      첫번째 자식
      <Child2 />
    </div>
  );
}

export default Child1;
