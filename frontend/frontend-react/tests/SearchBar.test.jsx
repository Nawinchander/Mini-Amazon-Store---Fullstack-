import { render, screen, fireEvent } from "@testing-library/react";

import SearchBar from "../src/components/SearchBar";

describe("SearchBar", () => {

    test("allows user to enter search text", () => {

        let search = "";

        const setSearch = (value) => {
            search = value;
        };

        render(
            <SearchBar
                search={search}
                setSearch={setSearch}
            />
        );

        const input = screen.getByPlaceholderText(
            "Search products..."
        );

        fireEvent.change(input, {
            target: {
                value: "iphone"
            }
        });

        expect(search).toBe("iphone");

    });

});




