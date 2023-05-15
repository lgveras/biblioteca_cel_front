<template>
    <h1>test</h1>
</template>

<script setup>
    import { onMounted } from 'vue';
    onMounted(async () => {
        await nextTick();
        const response = await useFetch("http://localhost:8000/catalogo/exemplar");
        console.log(response.error.value)
        console.log(response.data.value);
        console.log('myheader mounted');
    });
</script>
