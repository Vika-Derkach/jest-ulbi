import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import Users from "./Users";

jest.mock("axios");

describe("USER APP", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          userId: 1,
          id: 1,
          name: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        },
        {
          userId: 1,
          id: 2,
          name: "qui est esse",
        },
        {
          userId: 1,
          id: 3,
          name: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        },
        {
          userId: 1,
          id: 4,
          name: "eum et est occaecati",
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders learn react link", async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(null, "/users"));

    const users = await screen.findAllByTestId("user-item");

    expect(users.length).toBe(4);
    expect(axios.get).toBeCalledTimes(1);
  });

  test("redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(<Users />));

    const users = await screen.findAllByTestId("user-item");
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
