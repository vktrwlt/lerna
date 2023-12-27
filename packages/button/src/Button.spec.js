import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import { Button } from "./Button";

describe("Button", () => {
  test("render component", () => {
    const tree = renderer.create(<Button> Test </Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
