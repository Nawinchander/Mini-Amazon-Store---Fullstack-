import { useEffect, useState } from "react";

import { getProducts, addProduct } from "../services/api";

import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function Dashboard() {

    const [products, setProducts] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadProducts();

    }, []);

    const loadProducts = async () => {

        try {

            const response = await getProducts();

            setProducts(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    const filteredProducts = products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const handleAddProduct = async () => {

        const product = {
            name: "Samsung Galaxy",
            price: 50000,
            category: "Mobile",
            image: "https://via.placeholder.com/200"
        };

        try {

            await addProduct(product);

            loadProducts();

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <div>

            <header className="navbar">

                <h2>Mini Amazon</h2>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <button onClick={handleAddProduct}>
                    Add Product
                </button>

            </header>

            <main>

                <h1>Products</h1>

                <div className="products">

                    {filteredProducts.map((product) => (

                        <ProductCard
                            key={product._id}
                            product={product}
                        />

                    ))}

                </div>

            </main>

        </div>
    );
}

export default Dashboard;




