import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  const state = reducers({ searchTerm: '', apiData: {} }, { type: 'SET_SEARCH_TERM', payload: 'black' });
  expect(state).toEqual({ searchTerm: 'black', apiData: {} });
});

test('ADD_API_DATA', () => {
  const state = reducers({ searchTerm: '', apiData: {} }, { type: 'ADD_API_DATA', payload: { rating: '2.3', title: 'Atlanta', year: '2008–2013', description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.', poster: 'a.jpg', imdbID: 'tt4288182', trailer: 'MpEdJ-mmTlY' } });
  expect(state).toEqual({ searchTerm: '', apiData: { tt4288182: { rating: '2.3', title: 'Atlanta', year: '2008–2013', description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.', poster: 'a.jpg', imdbID: 'tt4288182', trailer: 'MpEdJ-mmTlY' } } });
});
