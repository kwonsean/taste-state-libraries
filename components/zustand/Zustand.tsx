'use client';
import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import Child1 from './Child1';
import { createCounterStore } from './store';

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const CounterStoreProvider = ({
  children,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore();
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

const Zustand = () => {
  return (
    <div>
      Zustand 부모 컴포넌트
      <Child1 />
    </div>
  );
};

export default Zustand;
