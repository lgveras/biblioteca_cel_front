<template>
      <v-col cols="12">
        <div id="search-bar">
          <!-- <v-text-field class="mb-10" label="Título, autor, editora ..." hide-details="auto">
            <v-icon id="search-icon" class="pb-6" size="x-large" :icon="'mdi-magnify'" />
          </v-text-field> -->
          <v-autocomplete
            v-model="idSelectedSearch"
            v-model:search="keywordTyping"
            :loading="loading"
            :items="items"
            class="mb-10"
            size="x-large"
            density="comfortable"
            item-title="titulo"
            item-value="id"
            label="Digite o título do exemplar..."
            prepend-icon="mdi-magnify"
          >
            <template v-slot:item="obj">
              <div>
                <NuxtLink :to="`/exemplar/${obj.item.value}`">
                {{obj.item.value}}-{{obj.item.title}}
              </NuxtLink>
              </div>             
            </template>
          </v-autocomplete>
        </div>

        <div id="language-selector" class="mb-10">
          <h1>Idiomas</h1>
          <v-carousel id="idiomas-carousel" hide-delimiters>
            <!-- Button to previous element -->
            <!-- <template v-slot:prev="{ props }">
            <v-btn variant="elevated" color="success" @click="props.onClick">Previous slide</v-btn>
          </template> -->
            <!-- Button to next element -->
            <!-- <template v-slot:next="{ props }">
            <v-btn @click="props.onClick">
              <v-icon :icon="'mdi-arrow'"></v-icon>
            </v-btn>
          </template> -->

            <v-carousel-item>
              <NuxtLink to="/porlingua/espanhol">
                <div class="idioma"><img src="/images/spain.png" alt=""></div>
              </NuxtLink>
            </v-carousel-item>
            <v-carousel-item>
              <NuxtLink to="/porlingua/alemao">
                <div class="idioma"><img src="/images/germany.png" alt=""></div>
              </NuxtLink>
            </v-carousel-item>
            <v-carousel-item>
              <NuxtLink to="/porlingua/português">
                <div class="idioma"><img src="/images/brazil.png" alt=""></div>
              </NuxtLink>
            </v-carousel-item>
            <v-carousel-item>
              <NuxtLink to="/porlingua/italiano">
                <div class="idioma"><img src="/images/italy.png" alt=""></div>
              </NuxtLink>
            </v-carousel-item>
            <v-carousel-item>
              <NuxtLink to="/porlingua/russo">
                <div class="idioma"><img src="/images/russia.png" alt=""></div>
              </NuxtLink>
            </v-carousel-item>
            <v-carousel-item>
              <NuxtLink to="/porlingua/hebraico">
                <div class="idioma"><img src="/images/israel.png" alt=""></div>
              </NuxtLink>
            </v-carousel-item>
          </v-carousel>
        </div>

        <div id="new-books" style="max-width: 100vw;" theme="dark">
          <h1 class="mb-3">Novos Livros</h1>
          <div id="list-new-books">
            <v-card class="mx-auto mb-2">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div class="book-item">
                  <img src="/images/cover-decartes.jpg" alt="Capa do Livro">
                </div>
                <div class="d-flex flex-column justify-space-between">
                  <div>
                    <v-card-title class="text-h5 text-wrap">
                      O dircurso do método
                    </v-card-title>
                    <v-card-subtitle>René Descartes</v-card-subtitle>
                  </div>
                  <v-card-actions class="action-book">
                    <v-btn density="comfortable" class="ms-1" size="x-small" prepend-icon="mdi-plus" stacked
                      variant="tonal"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>

            <v-card class="mx-auto mb-2">
              <div class="d-flex  flex-no-wrap justify-space-between">
                <div class="book-item">
                  <img src="/images/cover-decartes.jpg" alt="Capa do Livro">
                </div>
                <div class="d-flex flex-column justify-space-between">
                  <div>
                    <v-card-title class="title-style text-h5 text-wrap">
                      O dircurso do método
                    </v-card-title>
                    <v-card-subtitle>Rene Descartes</v-card-subtitle>
                  </div>
                  <v-card-actions class="title-style action-book">
                    <v-btn density="comfortable" class="ms-1" size="x-small" prepend-icon="mdi-plus" stacked
                      variant="tonal"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>

            <v-card class="mx-auto mb-2">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div class="book-item">
                  <img src="/images/cover-decartes.jpg" alt="Capa do Livro">
                </div>
                <div class="d-flex flex-column justify-space-between">
                  <div>
                    <v-card-title class="title-style text-h5 text-wrap">
                      O dircurso do método
                    </v-card-title>
                    <v-card-subtitle>Rene Descartes</v-card-subtitle>
                  </div>
                  <v-card-actions class="action-book">
                    <v-btn density="comfortable" class="ms-1" size="x-small" prepend-icon="mdi-plus" stacked
                      variant="tonal"></v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
          </div>
        </div>
      </v-col>    
</template>

<script setup >
  import { watch } from 'vue'

  const {$exemplar_api} = useNuxtApp();

  /* Variable to autocomplete */
  let loading = false;
  let items = [];

  const keywordTyping = ref("");

  // const querySelection = async () =>{
  //   items = await $exemplar_api.getByTitle(keywordTyping.value);
  // }

  const search = watch(keywordTyping, async (newKeyword, oldKeyword)=>{
    console.log("Palavra buscada: " + keywordTyping.value)
    loading = true;
    console.log(`Old: ${oldKeyword} - New: ${newKeyword}`);
    const result = await $exemplar_api.getByTitle(newKeyword);
    items = result;
    // items = JSON.parse(JSON.stringify(result));
    console.log("Está chegando aqui");
    loading = false;
  });

  const showInfo = () => console.log(keywordTyping.value);

  // onMounted(async ()=>{
  //   // <p>{{ JSON.stringify($exemplar_api.getAll()) }}</p>
  //   // console.log("API calling");
  //   // // console.log($exemplar_api)
  //   // const response = await $exemplar_api.getAll();
  //   // const response = "API calling";
  //   // console.log(response);
  //   // console.log($myPlugin());
  // })
</script>

<style scoped>
* {
  margin: 0;
  text-decoration: none;
  box-sizing: border-box;
}

.title-style{
  font-family: Montserrat;
}

h1, h2 {
  font-family: 'Roboto', sans-serif;
}

#search-icon {
  position: absolute;
  right: 10px;
}

img {
  max-width: 80%;
}

.action-book {
  align-self: flex-end;
}

@media screen and (max-width: 375px) {
  .menu-style {
    padding: 10px;
  }

  #menu-bar-pc {
    display: none;
  }

  #menu-bar {
    justify-content: space-between;
    display: relative;
    left: 0;
    width: 100vw;
  }

  #marker-menu {
    display: flex;
    align-items: center;
  }

  #menu-bar span {
    margin-right: 5px;
  }

  #menu-bar #menu-itens * {
    margin: 0 5px;
  }

  #menu-navegação {
    justify-content: space-between;
  }

  #idiomas-carousel {
    height: 100px !important;
  }

  .idioma {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100px;
  }

  .book-item {
    margin-left: 10px;
    max-width: 198px;
    display: grid;
    place-content: center;
  }
}

@media screen and (min-width: 375px) {
  h1 {
    font-size: 3rem;
  }

  #menu-bar {
    display: none;
  }

  .menu-style {
    flex-direction: column;
    gap: 10px
  }

  #logo {
    max-width: 50px;
  }

  #logo>img {
    max-width: inherit;
  }

  #title-menu {
    flex: 1 1 auto;
    display: flex;
    text-align: center;
    gap: 30px
  }

  #title-menu #title {
    width: inherit;
    display: grid;
    place-content: center;
    font-weight: bold;
    font-size: 2rem;
  }

  #menu-btns {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 20px
  }

  #menu-btns .btn-menu {
    font-size: x-small;
    flex-shrink: 1;
  }

  #search-bar {
    width: 40%;
    margin: 0 auto;
  }

  #language-selector {
    text-align: center;
    width: 50%;
    margin: 0 auto;
  }

  #idiomas-carousel {
    height: 160px !important;
  }

  #idiomas-carousel .idioma {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 200px;
  }

  #new-books h1 {
    text-align: center;
  }

  #list-new-books {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }

  .book-item {
    margin: 20px;
    max-width: 198px;
    display: grid;
    place-content: center;
  }

  .bottom-navigation {
    display: none;
  }
}</style>