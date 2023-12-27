import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Input } from "./Input";

describe("Input", () => {
  test("render component", () => {
    const tree = renderer.create(<Input placeholder="Name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
