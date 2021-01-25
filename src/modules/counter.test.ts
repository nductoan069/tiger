import {createInitialState} from "./counter";

test('return object {value:0}', () => {
    expect(createInitialState()).toEqual({value:0});
  });