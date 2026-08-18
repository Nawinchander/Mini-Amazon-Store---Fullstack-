import {
    render,
    screen,
    fireEvent,
    waitFor
} from "@testing-library/react";

import Login from "../src/pages/Login";

import { loginUser } from "../src/services/api";

vi.mock("../src/services/api", () => ({
    loginUser: vi.fn()
}));

describe("Login", () => {

    test("logs in successfully", async () => {

        loginUser.mockResolvedValue({
            data: {
                token: "test-token"
            }
        });

        const setLoggedIn = vi.fn();

        render(
            <Login
                setLoggedIn={setLoggedIn}
            />
        );

        const button = screen.getByRole(
            "button",
            {
                name: "Login"
            }
        );

        fireEvent.click(button);

        await waitFor(() => {

            expect(loginUser)
                .toHaveBeenCalled();

            expect(setLoggedIn)
                .toHaveBeenCalled();

        });

        expect(
            localStorage.getItem("token")
        ).toBe("test-token");

    });

});





