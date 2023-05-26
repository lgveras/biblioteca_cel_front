<template>
    <v-bottom-navigation grow class="menu-style bottom-navigation">
        <NuxtLink to="/"> 
          <v-btn value="recent">
            <v-icon>mdi-home</v-icon>
            Home
          </v-btn>
        </NuxtLink>

        <NuxtLink to="/exemplares">
          <v-btn value="recent">
            <v-icon>mdi-book-open-page-variant</v-icon>
            Opções
          </v-btn>
        </NuxtLink>

        <NuxtLink to="/reservados">
          <v-btn value="favorites">
            <v-icon>mdi-cart-outline</v-icon>
            Favoritos
          </v-btn>
        </NuxtLink>

        <NuxtLink to="/novo">
          <v-btn value="nearby">
            <v-icon>mdi-menu</v-icon>
            Cadastro
          </v-btn>
        </NuxtLink>

        </v-bottom-navigation>
</template>

<style scoped>
.menu-style {
    display: flex;
    justify-content: space-between !important;
    background-color: aqua;
}


@media screen and (max-width: 640px) {
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
    width: 100px;
  }

  .book-item {
    margin-left: 10px;
    max-width: 198px;
    display: grid;
    place-content: center;
  }
}

@media screen and (min-width: 640px) {
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
}
</style>