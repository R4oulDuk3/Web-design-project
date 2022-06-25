<template>
    <div class="mojNalog">
        <div class="buttons">
            <button class="button left" :class="{selected:this.showOglasi}" @click="this.showComments=false;this.showOglasi=true">Moji Oglasi</button>
            <button class="button right" :class="{selected:this.showComments}" @click="this.showComments=true;this.showOglasi=false">Moji komentari</button>
        </div>
        <OglasiPregled :sviOglasi="this.mojiOglasi" :deletable="true" v-if="showOglasi">
        </OglasiPregled>
        <Comments :comments="this.mojiKomentari" v-if="showComments">

        </Comments>

    </div>
</template>

<style>
    .mojNalog{
        margin-top: 5.5rem;
        height: 100vh;
    }
    .buttons{
        
    }
    .button{
        background: lightgray;
        border: none;
        font-size: 20px;
        padding: 0.5rem 1rem;
        width: 220px;
        font-family: 'Ubuntu', sans-serif;
        font-weight: bold;
    }
    .button:hover{
        background: rgb(113, 180, 141) !important;
    }
    .selected{
        background: rgb(113, 180, 141) !important;
    }
    .left{
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        margin-right: 0.1rem;
    }
    .right{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-left:0.1rem;
    }

</style>

<script>
import OglasiPregled from '../components/OglasiPregled.vue'
import Comments from '../components/Comments.vue'
export default{
    name:"MojNalog",
    components:{
        OglasiPregled,
        Comments
    },
    data(){
        return {
            mojiOglasi:[],
            mojiKomentari:[],
            currentUser:null,
            showOglasi:true,
            showComments:false,
        }
    },
    created(){
        if(localStorage.getItem("currentUser")==null){
                localStorage.setItem("currentUser",JSON.stringify({
                    idUser: "3",
                    username:"Mirko"
                }))
            }
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"))
        let sviOglasi = JSON.parse(localStorage.getItem("oglasi"))
        for(let oglas of sviOglasi){
            if(oglas.idCreator==this.currentUser.idUser){
                this.mojiOglasi.push(oglas)
            }
            for(let comment of oglas.comments){
                if(comment.idCreator== this.currentUser.idUser){
                    this.mojiKomentari.push(comment)
                }
            }
        }
        console.log(this.mojiOglasi)
        console.log(this.mojiKomentari)
    },
    methods:{

    }
    
}



</script>