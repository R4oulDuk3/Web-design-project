<template>
    <div>
        <div v-for="oglas in sviOglasi" :key="oglas">
            <Oglas :oglas="oglas"></Oglas>
        </div>
    </div>
    
</template>

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