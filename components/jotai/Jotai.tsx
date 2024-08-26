'use client';
import { useAtom } from 'jotai';
import Child1 from './Child1';
import { citiesAtom, countAtom } from './atoms';

const Jotai = () => {
  // * 다른 아톰 사용하는 건 문제 없음
  // * 해당 아톰이 아니면, 리렌더링 되지 않음
  const [cities, setCities] = useAtom(citiesAtom);

  // * 이걸 사용하는 순간 자식 요소들 모두 리렌더링 시작됨
  // * 결국 음.. 사용되는 곳은 모두 리렌더링 됨
  // useAtom(countAtom)

  return (
    <div style={{ height: '500px', border: '1px solid yellow' }}>
      <h3>Jotai 부모 컴포넌트</h3>

      {cities.map(city => {
        return <span key={city}>{city}</span>;
      })}
      <Child1 />
    </div>
  );
};

export default Jotai;
