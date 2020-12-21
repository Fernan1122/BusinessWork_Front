<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand id="titulo" to="/">BusinessWork</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav id="buscador">
          <b-nav-form @submit.prevent="search" class="buscador2">
            <b-button size="sm" class="my-2 my-sm-0" type="submit" style="background-color: white;"
              ><img src="../assets/lupa.svg" width="18px" height="18px" /></b-button>
            <b-form-input id="buscador-campo" 
              size="sm"
              placeholder="Ingrese el nombre del archivo"
              v-model="searchText"
            ></b-form-input>
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>-->

          <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="headericon" to="/agregar"><img id="anadir" src="../assets/anadir.svg" width="30rem" height="30rem"/></b-nav-item>
          <b-nav-item to="/about"><img src="../assets/notificacion.svg" width="30rem" height="30rem" /></b-nav-item>
          <b-nav-item-dropdown >
            <template v-slot:button-content>
              <img src="../assets/usuario-hombre.svg" width="30rem" height="30rem"><img/>
            </template>
          <!-- Using 'button-content' slot -->
            <b-dropdown-item>Perfil</b-dropdown-item>
            <b-dropdown-item @click="salir">Salir</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    salir() {
      this.$emit("click");
    }
    ,
    search() {
      console.log(this.searchText);
      this.$store.dispatch("search", { text: this.searchText });
    }
  },
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#nav a.router-link-exact-active {
  color: white;
}


.bg-info{
  background: linear-gradient(90deg, #312670 0%, #38D39F 53.65%, #32BE8F 100%);
}

#titulo{
  color: white;
  font-size: 1.7rem;
}
.ml-auto{
  padding-right: 5rem;
}
#buscador{
  padding-left: 5rem;
}
#buscador-campo{
  width: 20rem;
}
</style>
