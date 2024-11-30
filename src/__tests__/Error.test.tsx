import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import UserProfile from "../components/UserProfile";

global.fetch = jest.fn(() => {
  return Promise.reject(new Error("Failed to fetch"));
}) as jest.Mock;

describe("UserProfile Component - Error State", () => {
  it("should display an error message if there is an error fetching data", async () => {
    render(<UserProfile />);
    expect(await screen.findByText(/Error fetching user data/i)).toBeInTheDocument();
  });
});
