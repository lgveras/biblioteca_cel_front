<template>
    <h1>Exemplares do CEL</h1>
    <v-data-table-server 
        v-model:items-per-page="itemsPerPage" :headers="headers" :items-length="totalItems"
        :items="serverItems" :loading="loading" loading-text="Carregando... Por favor aguarde" class="elevation-1" item-value="id"
        @update:options="loadItems">
        <template v-slot:item.titulo="{item}">
            <NuxtLink :to="`/exemplar/${item.columns.id}`">
                {{item.columns.titulo}}
            </NuxtLink>
        </template>
        <template v-slot:item.reservado="{item}">
            <v-checkbox disabled class="ml-auto mr-auto"
                :model-value="item.columns.reservado"
                v-bind:value="true"
            ></v-checkbox>
        </template>
    </v-data-table-server>    
</template>

<script>
const { $exemplar_api } = useNuxtApp();

export default {
    data: () => ({
        itemsPerPage: 20,
        headers: [
            { title: 'Id', sortable:false, key: 'id', align: 'end' },
            { title: 'Título', key: 'titulo', align: 'start' },
            { title: 'Autor', key: 'autor', align: 'start' },
            { title: 'Exemplar', key: 'exemplar', align: 'end' },
            { title: 'Língua', key: 'area', align: 'end' },
            { title: 'Reservado', key: 'reservado', align: 'end' },
        ],
        serverItems: [],
        loading: true,
        totalItems: 0,
    }),
    methods: {
        async loadItems({ page, itemsPerPage, sortBy }) {
            await nextTick();
            this.loading = true;
            const dataServer = await $exemplar_api.getAllPagination({ page, itemsPerPage, sortBy });
            this.serverItems = dataServer.exemplares;
            this.totalItems = dataServer.totalItems;
            this.loading = false;
        },
    }
}
</script>

<style scoped>
    h1 {
        margin-bottom: 30px;
    }

    h1::after{
        content: " ";
        display: block;
        height: 10px;
        width: 100px;
        background-color: aqua;
    }
</style>
