const productService =
    require("../services/product.service");

const Product =
    require("../models/Product");

jest.mock("../models/Product");

describe("Product Service", () => {

    test("getProducts returns products", async () => {

        const products = [

            {
                name: "iPhone 16",
                price: 89999
            },

            {
                name: "MacBook Air",
                price: 99999
            }

        ];

        Product.find.mockResolvedValue(products);

        const result =
            await productService.getProducts();

        expect(result)
            .toEqual(products);

        expect(Product.find)
            .toHaveBeenCalled();

    });


    test("createProduct creates a product", async () => {

        const product = {

            name: "Samsung Galaxy",

            price: 50000,

            category: "Mobile"

        };

        Product.create
            .mockResolvedValue(product);

        const result =
            await productService.createProduct(product);

        expect(result)
            .toEqual(product);

        expect(Product.create)
            .toHaveBeenCalledWith(product);

    });

});



