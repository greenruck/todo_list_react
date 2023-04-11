import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("runs create when form is submitted", function() {
    const createMock = jest.fn();
    const { getByText } = render(<NewTodoForm createTodo={createMock} />);
    fireEvent.click(getByText("Add a todo!"));
    expect(createMock).toHaveBeenCalled();
});