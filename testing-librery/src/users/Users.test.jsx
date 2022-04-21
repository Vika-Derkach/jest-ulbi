import { render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./Users";

jest.mock("axios");

describe("TEST APP", () => {
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

  test("renders learn react link", async () => {
    axios.get.mockReturnValue(response);
    render(<Users />);

    const users = await screen.findAllByTestId("user-item");

    expect(users.length).toBe(4);
    expect(axios.get).toBeCalledTimes(1);
  });
});
