<template>
    <v-sheet>
        <v-dialog v-model="dialog" width="auto">
            <v-card v-if="dialog" append-icon="$close" class="mx-auto" elevation="16" max-width="500"
                title="Reservar um exemplar">
                <template v-slot:append>
                    <NuxtLink to="/">
                        <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
                    </NuxtLink>
                </template>

                <v-divider></v-divider>

                <div class="py-12 text-center">
                    <v-icon class="mb-6" color="success" icon="mdi-check-circle-outline" size="128"></v-icon>

                    <div class="text-h4 font-weight-bold">O exemplar foi reservado</div>
                </div>

                <v-divider></v-divider>

                <div class="pa-4 text-end">
                    <NuxtLink to="/">
                        <v-btn class="text-none" color="medium-emphasis" min-width="92" rounded variant="outlined"
                                @click="dialog = false">
                            Fechar
                        </v-btn>
                    </NuxtLink>
                   
                </div>
            </v-card>
        </v-dialog>

        <div class="d-flex flex-column flex-sm-row justify-center align-center align-sm-center">
            <v-img class="flex-1-0 mt-3 mr-4" aspect-ratio="1/1" cover :width="250" max-width="250" :src="imgSrc"></v-img>
            <div class="d-flex flex-column justify-space-between align-center">
                <h1 class="mt-12 mt-sm-0 align-self-center text-center text-sm-left">{{ data.titulo }}</h1>
                <span><img :src="`https://flagsapi.com/${bandeira[data.area]}/flat/64.png`"></span>
                <span>{{ data.autor }}</span>
                <span>Exemplares:</span> <span> {{ data.exemplar }} </span>
                <v-btn v-if="data.reservado" disabled class="mt-7 bg-red" size="large">Exemplar Reservado</v-btn>
                <v-btn v-else class="mt-7 bg-blue" size="large" @click="reservarExemplar">Reservar Exemplar</v-btn>
            </div>
        </div>
    </v-sheet>
</template>

<script setup>
import {ref} from 'vue'
const { $exemplar_api } = useNuxtApp();
const route = useRoute()
const { data, refresh } = await useAsyncData(
    'exemplar',
    async () => {
        return await $exemplar_api.getById(route.params.exemplarid)
    }
)
let dialog = ref(false);

const bandeira = {
    "RUSSA": "RU",
    "ALEMAO": "DE",
    "JAPONES": "JP",
    "ESPANHOL": "ES",
    "FRANCES": "FR",
    "HEBRAICO": "IL",
    "INGLES": "GB",
    "ITALIANO": "IT",
    "PORTUGUÊS": "BR",
    "RUSSO": "RU"
}

let imgSrc = "/images/cover_book.jpg";

const reservarExemplar = async() =>{
    console.log("reservando");
    await $exemplar_api.setReserved(route.params.exemplarid)
    refresh()
    dialog = ref(true);
}
</script>

<style scoped>
h1 {
    margin-bottom: 30px;
    font-family: Montserrat;
}

/* h1::after{
        content: " ";
        display: block;
        height: 10px;
        width: 100px;
        background-color: aqua;
    } */
</style>
