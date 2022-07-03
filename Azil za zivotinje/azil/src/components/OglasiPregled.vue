<template>
    <div>

            <div class="center grid shrink">
                <div v-for="oglas in sviOglasi" :key="oglas">
                    <Oglas :oglas="oglas" :deletable="this.$props.deletable" :canprint="this.$props.canprint" ref="foo" class="shrink"></Oglas>
                </div>
            </div>
        
    </div>
    
</template>

<style>
    .shrink > div{
        display: inline-block;
        height: auto;
    }
    .grid{
        margin-top: 1.5rem;
        display: grid;
        grid-gap: 20px 10px;
        grid-template-columns: auto;
        grid-auto-rows: 1fr
    }
        /* @media print {

        .notprintable{
            display: none !important;
        }      
    } */

</style>
    

<script>
import Oglas from "../components/Oglas.vue"
    export default{
        name:"OglasiPregled",
        components:{
            Oglas
        },
        props:[
            'sviOglasi',
            'deletable',
            'canprint'
        ]
        
    }

</script>