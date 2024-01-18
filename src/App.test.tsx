import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";



describe('App test',()=> {
  test("renders App component", () => {
    render(<App />);
  });

  test("contains 'App' class", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('App')).not.toHaveLength(0);
  });
  test("contains 'header' class", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('header')).not.toHaveLength(0);
  });
  test("contains 'nav' class", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('nav')).not.toHaveLength(0);
  });
})
