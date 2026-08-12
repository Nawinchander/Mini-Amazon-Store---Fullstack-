<template>

    <input
        type="text"
        placeholder="Search products..."
        :value="search"
        @input="updateSearch"
    />

</template>

<script setup>

defineProps({
    search: String
});

const emit = defineEmits(["update:search"]);

const updateSearch = (event) => { emit("update:search", event.target.value ); };

</script>


<!-- How SearchBar Works Dashboard sends the search value: -->

<SearchBar :search="search" @update:search="search = $event" />

<!-- When the user enters: iphone - the value becomes: search = "iphone";

Then Dashboard filters the products. -->


