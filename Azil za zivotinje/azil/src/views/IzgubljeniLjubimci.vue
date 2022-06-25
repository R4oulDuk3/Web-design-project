<template>
    <div class="center">
        <div class="main-content">
            <OglasiPregled :sviOglasi="this.oglasi" :deletable="false"></OglasiPregled>
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
import oglasi from '@/data/oglasi'
export default{
    name:"DodajOglas",
    components:{
    OglasiPregled,
    },
    data(){
        return {
            oglasi:null
        }
    },
    created(){
            if(localStorage.getItem("oglasi")==null){
                localStorage.setItem("oglasi",JSON.stringify(oglasi))
            }
            this.oglasi = JSON.parse(localStorage.getItem("oglasi"))
            
    }
    
}

</script>