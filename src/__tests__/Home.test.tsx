import React from "react";
import { renderRouter, screen, fireEvent } from "expo-router/testing-library";
import Home from "../app";

jest.mock("react-native-reanimated", () => null, {
  virtual: true,
});
jest.mock("@testing-library/jest-native/extend-expect", () => null, {
  virtual: true,
});

describe("Navigation tests", () => {
  const MockComponent = jest.fn(() => <Home />);

  it("renders home", async () => {
    renderRouter(
      {
        index: MockComponent,
        list: MockComponent,
        tasks: MockComponent,
      },
      {
        initialUrl: "/",
      }
    );
    expect(screen).toHavePathname("/");
    expect(screen.getByText("Tasks")).toBeTruthy();
    expect(screen.getByText("List")).toBeTruthy();
  });

  it("navigation to tasks", async () => {
    renderRouter(
      {
        index: MockComponent,
        list: MockComponent,
        tasks: MockComponent,
      },
      {
        initialUrl: "/",
      }
    );
    const taskButton = screen.getByLabelText("Tasks", { exact: true });

    fireEvent.press(taskButton);

    expect(screen).toHavePathname("/tasks");
  });

  it("navigation to list", async () => {
    renderRouter(
      {
        index: MockComponent,
        list: MockComponent,
        tasks: MockComponent,
      },
      {
        initialUrl: "/",
      }
    );
    const listButton = screen.getByLabelText("List", { exact: true });

    fireEvent.press(listButton);

    expect(screen).toHavePathname("/list");
  });
});
