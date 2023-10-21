import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Article (){
  return <p>please pass this test</p>
}

export default Article

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  let element = screen.queryByText("please pass this test");

  screen.debug(element)

  expect(element).toBeInTheDocument();
});
