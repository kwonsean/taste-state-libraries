import React from 'react';
import { useStore } from 'zustand';

function Child2() {
  const bears = useStore(state => state.bears);
  return <h1>{bears} around here...</h1>;
}

export default Child2;
