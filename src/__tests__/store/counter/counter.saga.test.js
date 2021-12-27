import { put, takeEvery } from 'redux-saga/effects';
import CounterActionType from "../../../store/counter/counter.type";
import { decrementCreator, incrementCreator } from "../../../store/counter/counter.action";
import { countWatcher, decrementWorker, delay, incrementWorker } from "../../../store/counter/counter.saga";




describe('Counter Saga', () => {
	jest.useFakeTimers();
	
	it('should dispatch action "ASYNC_INCREMENT" & "ASYNC_DECREMENT"', () => {
		const generator = countWatcher();
		
		expect(generator.next().value).toEqual(takeEvery(CounterActionType.ASYNC_INCREMENT, incrementWorker));
		expect(generator.next().value).toEqual(takeEvery(CounterActionType.ASYNC_DECREMENT, decrementWorker));
		
		expect(generator.next().done).toBeTruthy();
	})
	
	it('decrementWorker', () => {
		const generator = decrementWorker();
		generator.next();

		expect(generator.next().value).toEqual(put(decrementCreator()));
		expect(generator.next().done).toBeTruthy();
	})
	
	it('incrementWorker', () => {
		const generator = incrementWorker();
		generator.next();
		
		expect(generator.next().value).toEqual(put(incrementCreator()));
		expect(generator.next().done).toBeTruthy();
	})

	it('delay function', () => {
		const delayFn = delay(1000);
		jest.runAllTimers();
		
		delayFn.then(res => expect(res).toBeTruthy())
	})
})
