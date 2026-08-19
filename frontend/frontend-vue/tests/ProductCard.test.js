
import { mount } from "@vue/test-utils";

import ProductCard
    from "../src/components/ProductCard.vue";

describe("ProductCard", () => {

    test("displays product information", () => {

        const product = {
            name: "iPhone 16",
            price: 89999,
            category: "Mobile",
            image: "iphone.jpg"
        };

        const wrapper = mount(
            ProductCard,
            {
                props: {
                    product
                }
            }
        );

        expect(wrapper.text()).toContain("iPhone 16");

        expect(wrapper.text()).toContain("Mobile");

        expect(wrapper.text()).toContain("89999");

        expect(wrapper.get("button")).toBeTruthy();

    });

});



