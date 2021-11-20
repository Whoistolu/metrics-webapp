import reducer, { GET_CONTINENT } from './continentReducer';

describe('test the reducer function for the store', () => {
  test('reducer returns new state', () => {
    const newState = [1, 2, 3];
    const result = reducer(undefined, { type: GET_CONTINENT, payload: newState });
    expect(result[0]).toEqual(1);
    expect(result[1]).toEqual(2);
    expect(result[2]).toEqual(3);
  });
});
