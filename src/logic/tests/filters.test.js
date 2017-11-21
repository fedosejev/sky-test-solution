import reducer, { initialState, setFilterIsHideComplete } from '../filters';

describe('filters reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should toggle complete filter on SET_FILTER_IS_HIDE_COMPLETE', () => {
    const state = {
      filters: {
        isHideComplete: false,
      },
    }
    const mockAction = setFilterIsHideComplete({ isHideComplete: true });
    const result = reducer(state, mockAction);
    expect(result.isHideComplete).toEqual(true);
  });
});
