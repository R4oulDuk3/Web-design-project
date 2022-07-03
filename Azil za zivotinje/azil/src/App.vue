<template>
  <Navigation></Navigation>

  <router-view/>
  <MyFooter></MyFooter>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.margin-top{
  margin-top: 5rem;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>

import Navigation from './components/Navigation.vue'
import MyFooter from './components/MyFooter.vue'

  export default{
    name:"App",
    components:{
    Navigation,
    MyFooter,
  },
  data(){
    return{
      crumbs: ['Home', 'Category','Sub category'],
    }
  }
  }


</script>
