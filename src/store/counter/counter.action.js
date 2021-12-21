import CounterActionType from "./counter.type";

export const incrementCreator = () => ({ type: CounterActionType.INCREMENT })
export const asyncIncrementCreator = () => ({ type: CounterActionType.ASYNC_INCREMENT })
export const decrementCreator = () => ({ type: CounterActionType.DECREMENT })
export const asyncDecrementCreator = () => ({ type: CounterActionType.ASYNC_DECREMENT })