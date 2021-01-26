import * as Counter from "./counter";

describe("counter",()=>{
  describe("createInitialState",()=>{
    test('return object {value:0}', () => {
      expect(Counter.createInitialState()).toEqual({value:0});
    });
  })
  describe("increment",()=>{
    test('return type: COUNTER_INCREMENT', () => {
      expect(Counter.increment()).toEqual({type: Counter.COUNTER_INCREMENT});
    });
  })
  describe("decrement",()=>{
    test('return type: COUNTER_DECREMENT', () => {
      expect(Counter.decrement()).toEqual({type: Counter.COUNTER_DECREMENT});
    });
  })
  describe("reducer",()=>{
    test('return object {value:1} when passed increment action', () => {
      expect(Counter.default(undefined,{
        type: Counter.COUNTER_INCREMENT
      })).toEqual({value: 1});
    });
    test('return object {value:-1} when passed decrement action', () => {
      expect(Counter.default(undefined,{
        type: Counter.COUNTER_DECREMENT
      })).toEqual({value: -1});
    });
    test('return object {value:0} when passed unknown action', () => {
      expect(Counter.default(undefined,{type:"foo"} as Counter.Action)).toEqual({value: 0});
    });
  })
})

