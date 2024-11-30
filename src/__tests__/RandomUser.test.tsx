import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import UserProfile from "../components/UserProfile";
import mockData from "../MockData.json"; 


global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockData),
  })
) as jest.Mock;


describe("UserProfile Component - API Call with Mock Data", () => {
  it("should check for user image and user email", async () => {
    render(<UserProfile />);
    expect(await screen.findByAltText("User")).toBeInTheDocument();
    expect(await screen.findByText(/rosa.petersen@example.com/i)).toBeInTheDocument();
  });
  });

