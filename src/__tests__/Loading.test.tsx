
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import UserProfile from "../components/UserProfile";

describe("UserProfile Component - Loading State", () => {
  it("should display the loading state initially", () => {
    render(<UserProfile />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
