<template>
  <div id="app">
    <div class="page" v-if="getSpinner">
      <b-spinner class="spinner" :variant="'primary'" :key="'primary'"></b-spinner>
    </div>
    <div id="nav">
      <top-header v-if="is_auth" @click="click" />
    </div>
    <router-view v-on:log-in="logIn" />
  </div>
</template>

<script>
import TopHeader from "@/components/top-header.vue";
import { mapGetters } from "vuex";

export default {
  data: function(){
      return{ 
        is_auth: localStorage.getItem('isAuth') || false
      }    
  },
  components: { "top-header": TopHeader },

  computed:{
    ...mapGetters(["getSpinner"])
  },

  methods:{
    updateAuth: function(){
      var self = this
      self.is_auth  = localStorage.getItem('isAuth') || false

      if(self.is_auth == false){
        self.$router.push({name: "login"})
      }
      else{
        self.$router.push({name: "home"})
      }
      
    },

    logIn: function(username){
      localStorage.setItem('current_username', username)
      localStorage.setItem('isAuth', true)
      this.updateAuth()
    },

    click(){
      localStorage.removeItem('isAuth')
      localStorage.removeItem('current_username')
      this.updateAuth()
    }
    },

    created: function(){
    this.updateAuth()
    }
};
</script>

<style lang="scss">


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}
.spinner {
  z-index: 26;
  position: relative;
  top: 50%;
}

</style>
