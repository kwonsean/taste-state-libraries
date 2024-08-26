import React, { useEffect } from 'react';
import CountUpBtn from './CountUpBtn';
import { useAtom } from 'jotai';
import { countAtom } from './atoms';

function Child2() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div
      style={{ border: '1px solid blue', height: '200px', marginTop: '100px' }}>
      두번째 자식 {count}
      <br />
      <CountUpBtn />
    </div>
  );
}

export default Child2;
