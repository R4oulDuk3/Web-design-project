<template>
    <div>

            <div class="center grid">
                <div v-for="oglas in sviOglasi" :key="oglas">
                    <Oglas :oglas="oglas"></Oglas>
                </div>
            </div>
        
    </div>
    
</template>

<style>
    .grid{
        margin-top: 1.5rem;
        display: grid;
        grid-gap: 20px 10px;
        grid-template-columns: auto;
        grid-auto-rows: 1fr
    }

</style>
    

<script>
import oglasi from "../data/oglasi.js"
import Oglas from "../components/Oglas.vue"
    export default{
        name:"OglasiPregled",
        components:{
            Oglas
        },
        data(){
            return {
                sviOglasi:[]
            }
        },
        created(){
            if(localStorage.getItem("oglasi")==null){
                localStorage.setItem("oglasi",JSON.stringify(oglasi))
            }
            this.sviOglasi = JSON.parse(localStorage.getItem("oglasi"))
        }
    }

</script>