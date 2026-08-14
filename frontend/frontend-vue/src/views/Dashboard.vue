<template>

    <div>

        <!-- Navigation -->

        <header class="navbar">

            <h2>Mini Amazon</h2>

            <SearchBar :search="search" @update:search="search = $event" />

            <button @click="addNewProduct"> Add Product </button>

        </header>


        <!-- Products -->

        <main>

            <h1>Products</h1>

            <p> {{ filteredProducts.length }} products found </p>

            <div class="products">

                <ProductCard
                    v-for="product in filteredProducts"
                    :key="product._id"
                    :product="product"
                />

            </div>

        </main>

    </div>

</template>


<script setup>

import { ref, computed, onMounted } from "vue";

import { getProducts, addProduct } from "../services/api";

import SearchBar from "../components/SearchBar.vue";

import ProductCard from "../components/ProductCard.vue";


/* Products */

const products = ref([]);


/* Search */

const search = ref("");


/* Load Products */

const loadProducts = async () => {

    try {

        const response = await getProducts();

        products.value = response.data;

    } catch (error) {

        console.log(error);

    }

};


/* Search Products */

const filteredProducts = computed(() => {

    return products.value.filter(
        (product) => {

            return product.name
                .toLowerCase()
                .includes(
                    search.value.toLowerCase()
                );

        }
    );

});


/* Add Product */

const addNewProduct = async () => {

    const product = {

        name: "Samsung Galaxy",

        price: 50000,

        category: "Mobile",

        image:
            "https://via.placeholder.com/200"

    };

    try {

        await addProduct(product);

        await loadProducts();

    } catch (error) {

        console.log(error);

    }

};


/* Load products when page opens */

onMounted(() => {

    loadProducts();

});

</script>



<!-- 13. Dashboard Explanation

There are three important Vue concepts here.

ref() const products = ref([]);

Stores reactive data.

When: products.value = response.data;

changes, Vue automatically updates the UI.
 -->


computed()

// const filteredProducts = computed(() => {

// This calculates the search results.

// For example:

// Products:

<!-- iPhone 16
Samsung Galaxy
MacBook Air
iPad -->

<!-- Search: iphone

Result: iPhone 16 -->


<!-- /////////////////////////////////////



onMounted()
onMounted(() => { loadProducts(); });

This executes when Dashboard is loaded.

So:

Dashboard opens
      ↓
onMounted()
      ↓
loadProducts()
      ↓
GET /api/products
      ↓
MongoDB
      ↓
Products displayed
 -->
 



