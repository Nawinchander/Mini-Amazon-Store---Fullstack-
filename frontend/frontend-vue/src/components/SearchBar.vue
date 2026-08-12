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

const emit = defineEmits([
    "update:search"
]);

const updateSearch = (event) => {

    emit(
        "update:search",
        event.target.value
    );

};

</script>


