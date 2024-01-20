import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App test', () => {
  test("renders App component", () => {
    render(<App />);
  });

  test("contains 'App' class", () => {
    render(<App />);
    const app = document.getElementsByClassName('App')[0];
    expect(app).toBeInTheDocument();
  });

  test("contains 'header' class", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('header')).not.toHaveLength(0);
  });

  test("contains 'nav' class", () => {
    const { container } = render(<App />);
    expect(container.getElementsByClassName('nav')).not.toHaveLength(0);
  });
});