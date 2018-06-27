import { shallow } from "enzyme";
import React from "react";
import preload from "../../data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

test("Search renders correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("search should render correct amount of shows", () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test(
  "search should render correct amount of shows based on search term",
  () => {
    const searchWord = "black";
    const component = shallow(<Search />);
    component
      .find("input")
      .simulate("change", { target: { value: searchWord } });
    const expectedShowCount = preload.shows.filter(
      show =>
        `${show.title} ${show.description}`
          .toUpperCase()
          .indexOf(searchWord.toUpperCase()) >=0
    ).length;
    console.log(`expected ${expectedShowCount}`)
    expect(component.find(ShowCard).length).toEqual(expectedShowCount);
  }
);
