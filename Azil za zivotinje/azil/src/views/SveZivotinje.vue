<template>
<div class="sve-main container" >
  <BreadCrumbs></BreadCrumbs>
<div class="row ">
  <div class="col-lg-4 col-sm-12">
    <img src="https://img.freepik.com/free-vector/cute-australian-shepherd_138676-2071.jpg" alt="..." class="sve-img">
    <h1><router-link to="/SveZivotinje/Kuce">Kuce</router-link></h1>
  </div>
  <div class="col-lg-4 col-sm-12">
    <img src="https://img.freepik.com/free-vector/cute-cat-yawning-sleepy-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3732.jpg?w=2000" alt="..." class="sve-img">
    <h1><router-link to="/SveZivotinje/Mace">Mace</router-link></h1>
  </div>
  <div class="col-lg-4 col-sm-12">
    <img src="https://img.freepik.com/free-vector/collection-cute-drawn-birds_23-2148629919.jpg?w=2000" alt="..." class="sve-img">
    <h1><router-link to="/SveZivotinje/Ptice">Ptice</router-link></h1>
  </div>
</div>
</div>
</template>

<style>
.sve-main{
  min-height: 75vh;
}
.sve-img{
  height: 400px;
  width: 400px;
}
</style>

<script>
import BreadCrumbs from '../components/BreadCrumbs.vue'
  export default{
    components:{BreadCrumbs}
  }

</script>