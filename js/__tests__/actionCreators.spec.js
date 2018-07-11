import {
  setSearchTerm,
  addAPIData
  //  addAPIData
} from "../actionCreators";

test("setSearchTerm", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});
test("addApiData", () => {
  expect(
    addAPIData({
      title: "Billions",
      rating: "8.8",
      year: "2016–",
      description: 'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
      poster: "b.jpg",
      imdbID: "tt4270492",
      trailer: "_raEUMLL-ZI"
    })
  ).toMatchSnapshot();
});
