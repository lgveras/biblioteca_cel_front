<template>
    <h1>Exemplares por Língua - {{ lingua.toUpperCase() }}</h1>
    <v-sheet>
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
    </v-sheet> 
</template>

<script >
    const { $exemplar_api } = useNuxtApp();
//     const route = useRoute()
// console.log(route.params)
export default {
    // solução de passagem de parâmetro para a página da tabela
    // https://stackoverflow.com/questions/65284428/how-to-get-params-of-router-in-vue-3
    setup() {
        const route = useRoute()

        // onMounted(() => {
        //     const lingua = route.params.lingua
        // })
        const lingua = computed(() => route.params.lingua)
        return {
            lingua
        }
    },
    // async asyncData({params}){
    //     console.log(params);
    //     const lingua = params.lingua;
    //     return {lingua};
    // },
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
            // await nextTick();
            this.loading = true;
            const linguaToQuery = this.lingua;
            console.log(page, itemsPerPage, sortBy, linguaToQuery)
            const dataServer = await $exemplar_api.getByLanguage({ page, itemsPerPage, sortBy}, this.lingua);
            console.log(dataServer);
            this.serverItems = dataServer.exemplares;
            this.totalItems = dataServer.totalItems;
            this.loading = false;
        },
    }
}

    // let lingua = route.params.lingua;
    // console.log(lingua)
    // let itemsPerPage = 20;
    // let headers = [
    //         { title: 'Id', sortable:false, key: 'id', align: 'end' },
    //         { title: 'Título', key: 'titulo', align: 'start' },
    //         { title: 'Autor', key: 'autor', align: 'start' },
    //         { title: 'Exemplar', key: 'exemplar', align: 'end' },
    //         { title: 'Língua', key: 'area', align: 'end' },
    //         { title: 'Reservado', key: 'reservado', align: 'end' },
    //     ];
    // let serverItems = [];
    // let loading = true;
    // let totalItems = 0;

    // const loadItems = async({ page, itemsPerPage, sortBy })=>{
    //     await nextTick();
    //     loading = true;
    //     const dataServer = await $exemplar_api.getByLanguage({ page, itemsPerPage, sortBy}, lingua);
    //     console.log(dataServer);
    //     serverItems = JSON.parse(JSON.stringify(dataServer.exemplares));
    //     console.log(serverItems);
    //     totalItems = dataServer.totalItems;
    //     loading = false;
    // }
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
