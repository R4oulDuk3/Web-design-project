<template>
    <div class="center">
        <div class="main-content">
            <OglasiPregled></OglasiPregled>
        </div>
    </div>
</template>

<style>
    .main-content{
        width: 80%;
        margin-top: 6rem;
    }

</style>

<script>

import OglasiPregled from '../components/OglasiPregled.vue'
export default{
    name:"DodajOglas",
    components:{
    OglasiPregled,
}
    
}

</script>