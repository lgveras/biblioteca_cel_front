<template>
    <h1>Criar novo exemplar</h1>
    <v-sheet width="300" class="mx-auto">
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

                    <div class="text-h4 font-weight-bold">O exemplar {{ novoExemplar.titulo }} foi criado</div>
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
        <v-form @submit.prevent>
            <v-text-field v-model="novoExemplar.titulo" label="Título do exemplar" :rules="noEmptyFieldRule"></v-text-field>
            <v-text-field v-model="novoExemplar.autor" label="Autor(es)" :rules="noEmptyFieldRule"></v-text-field>
            <v-text-field v-model="novoExemplar.exemplar" label="Nº Exemplares" :rules="mustBeNumber"></v-text-field>
            <v-text-field v-model="novoExemplar.area" label="Idioma" :rules="noEmptyFieldRule"></v-text-field>
            <v-btn type="submit" @click="criarLivro" block class="mt-2">Enviar novos dados</v-btn>
        </v-form>
    </v-sheet>
</template>

<script>
// import { ref } from 'vue'
const { $exemplar_api } = useNuxtApp();

export default {
    data: () => {
        return {
        dialog: false,
        novoExemplar: {
            titulo: "",
            autor: "",
            exemplar: 1,
            area: "português"
        },
        noEmptyFieldRule: [
            value => {
                if (value?.length > 3) return true
                return 'O campo deve conter pelo menos 3 caracteres.'
            },
        ],
        mustBeNumber: [
            value => {
                if (typeof value === "number") return true
                return 'Por favor digite um número neste campo.'
            },
        ]
    }},
    methods: {
        async criarLivro() {
            this.dialog = true;
            console.log(this.dialog);
            await $exemplar_api.create(this.novoExemplar)
        },
        async testando(){
            // console.log(this.dialog);
            console.log(this.novoExemplar);
        }
    }
}
</script>

<style scoped>
h1 {
    margin-bottom: 30px;
}

h1::after {
    content: " ";
    display: block;
    height: 10px;
    width: 100px;
    background-color: aqua;
}
</style>
