<template>

    <div class="product-card">

        <img :src="product.image" :alt="product.name" />

        <h3> {{ product.name }} </h3>

        <p> {{ product.category }} </p>

        <h4> ₹{{ product.price }} </h4>

        <button> Add to Cart </button>

    </div>

</template>

<script setup>

defineProps({ product: Object });

</script>


<!-- 
What ProductCard Does

The Dashboard gets: -->

{
    "name": "iPhone 16",
    "price": 89999,
    "category": "Mobile",
    "image": "iphone.jpg"
}

// and passes it:

<ProductCard :product="product" />




