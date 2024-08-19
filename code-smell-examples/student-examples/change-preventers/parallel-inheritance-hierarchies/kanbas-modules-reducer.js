import store from './store';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
const { increment, decrement } = counterSlice.actions;

class Counter {
  constructor() {
    this.store = store;
  }

  getCount() {
    return this.store.getState().counter.count;
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  displayCount() {
    console.log(`Current Count: ${this.getCount()}`);
  }
}

const counter = new Counter();

counter.displayCount();
counter.increment();

counter.displayCount();
counter.decrement();
counter.displayCount();
