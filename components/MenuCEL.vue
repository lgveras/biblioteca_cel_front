<template>
    <div id="menu-bar" class="menu-style color-menu">
        <div id="marker-menu">
            <v-icon>mdi-map-marker</v-icon>
            <a href="">CEL</a>
        </div>

        <div id="menu-itens">
            <v-btn density="compact" icon="mdi-cog" variant="text">
            </v-btn>
            <v-btn density="compact" icon="mdi-brightness-4" variant="text">
            </v-btn>
            <v-btn density="compact" icon="mdi-cart-outline" variant="text">
            </v-btn>
        </div>
    </div>

    <v-container fill-height style="margin: 0 auto">
        <div id="menu-bar-pc" class="menu-style w-100 mb-10">
            <div id="title-menu" class="w-100">
                <div id="logo">
                    <img src="/images/cel_logo.jpg" alt="Logo do CEL">
                </div>
                <div id="title" class="color-menu">
                    Sistema de Bibliotecas do CEL
                </div>
            </div>

            <div id="menu-btns">
                <NuxtLink to="/">
                    <v-btn class="color-menu btn-menu" prepend-icon="mdi-home">
                    <!-- <v-btn class="color-menu btn-menu" prepend-icon="mdi-map-marker"> -->
                        Home
                    </v-btn>
                </NuxtLink>

                <NuxtLink to="/exemplares">
                    <v-btn class="color-menu btn-menu" prepend-icon="mdi-book-open-page-variant">
                        Exemplares
                    </v-btn>
                </NuxtLink>

                <NuxtLink to="/reservados">
                    <v-btn class="color-menu btn-menu" prepend-icon="mdi-cart-outline">
                        Reservas
                    </v-btn>
                </NuxtLink>

                <NuxtLink to="/novo">
                    <v-btn class="color-menu btn-menu" prepend-icon="mdi-menu">
                        Novo Exemplar
                    </v-btn>
                </NuxtLink>
               
                <v-btn class="color-menu btn-menu" prepend-icon="mdi-heart">
                    Favoritas
                </v-btn>
                <v-btn class="color-menu btn-menu" prepend-icon="mdi-account">
                    Login/Usuário
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<style scoped>
.menu-style {
    display: flex;
}

.color-menu{
    background-color: aqua;
}

h1,
h2 {
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
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px
    }

    #menu-btns .btn-menu {
        flex: 1 1 auto;
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
