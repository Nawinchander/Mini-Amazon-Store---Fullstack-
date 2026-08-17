import { render, screen } from "@testing-library/react";

import ProductCard from "../src/components/ProductCard";

describe("ProductCard", () => {

    test("displays product information", () => {

        const product = {
            name: "iPhone 16",
            price: 89999,
            category: "Mobile",
            image: "iphone.jpg"
        };

        render(
            <ProductCard product={product} />
        );

        expect(
            screen.getByText("iPhone 16")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Mobile")
        ).toBeInTheDocument();

        expect(
            screen.getByText("₹89999")
        ).toBeInTheDocument();

        expect(
            screen.getByRole("button", {
                name: "Add to Cart"
            })
        ).toBeInTheDocument();

    });

});




// What are we testing?

// We're checking that:

// ProductCard
//    ↓
// Product name
// Product category
// Product price
// Add to Cart button

// are rendered correctly.




