import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers({searchTerm:'',apiData:{}}, {type:'SET_SEARCH_TERM',payload:'black'});
  expect(state).toEqual({searchTerm:'black',apiData:{}});
});
