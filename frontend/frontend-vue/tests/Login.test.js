import { mount } from "@vue/test-utils";

import Login from "../src/views/Login.vue";

import { loginUser } from "../src/services/api";

vi.mock("../src/services/api", () => ({ loginUser: vi.fn() }));


describe("Login", () => {

    test("logs in successfully", async () => {

        loginUser.mockResolvedValue({
            data: {
                token: "test-token"
            }
        });

        const wrapper = mount(Login);

        await wrapper
            .get("button")
            .trigger("click");

        await vi.waitFor(() => {

            expect(loginUser)
                .toHaveBeenCalled();

        });

        expect(
            localStorage.getItem("token")
        ).toBe("test-token");

        expect(
            wrapper.emitted("login")
        ).toBeTruthy();

    });

});





