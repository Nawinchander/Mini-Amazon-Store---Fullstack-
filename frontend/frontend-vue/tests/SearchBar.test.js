import { mount } from "@vue/test-utils";

import SearchBar from "../src/components/SearchBar.vue";

describe("SearchBar", () => {

    test("emits search text", async () => {

        const wrapper = mount(
            SearchBar,
            {
                props: {
                    search: ""
                }
            }
        );

        const input = wrapper.get("input");

        await input.setValue("iphone");

        expect(
            wrapper.emitted(
                "update:search"
            )[0]
        ).toEqual([
            "iphone"
        ]);

    });

});





