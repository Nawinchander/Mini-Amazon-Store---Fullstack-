import {
    mount
} from "@vue/test-utils";

import Login
    from "../src/views/Login.vue";

import { loginUser } from "../src/services/api";

vi.mock("../src/services/api", () => ({
    loginUser: vi.fn()
}));






