<template>
<div class="container">
    <BreadCrumbs></BreadCrumbs>
   <div class="row">
         <div class="col-lg-6 col-sm-12" id="pretraga">
               <input type="text" id="pr1" class="btn btn-outline-primary" placeholder="Nadji me po imenu" v-model="ime" > 
             
                <input type="text" id="pr2" class="btn btn-outline-primary " placeholder="Nadji me po godinama" v-model="godine">
            </div>
         <div class="col-lg-6 col-sm-12" id="sort">
            <div class="btn-flex">
                <button id="sr1" @click="sortirajNaziv()" class="btn btn-primary">Sortiranje imena </button>
                 <button id="sr2" @click="sortirajGodine()" class="btn btn-primary">Sortiranje godina</button>
            </div>
         </div>
         <br>
    </div> 
    <br>
     <div class="row">
        <div class="col-sm-2">
             &nbsp; </div>
        <div class="col-sm-12" v-for="z in pretraga" :key="z.id" >
        <h2>{{ z.ime }} ({{z.godine}})</h2> 
           <br>
           <img :src="z.jpg" alt="nema slike" @click="viseDetalja(z.id)">
           <h5>
                {{z.opis}} <br>
                 {{z.tezina}} kg <br>
               <!-- Godine : {{z.godine}} -->
           </h5>
           <br>
           <br>
        </div>
        <div class="col-sm-2"> &nbsp;
        </div>
    </div>

</div>

</template>

<style scoped>
.btn-flex{
    display: flex;
    flex-direction:column;
}
   img{
      width: 20%;
      /* padding-left: 30%;
      padding-bottom: 10%; */
     /* height: 40%;*/
   }

   .navbar{
    position: sticky;
    top: 0;
    z-index: 100;
   }
   #pretraga{
    border-color:black;

   }
   .btn{
    margin: 1rem;
   }

   .btn btn-primary{
    display:grid;
    justify-content: center;
   }
    .btn btn-outline-primary{
    display:grid;
    justify-content: center;
   }

 

</style>

<script>
import animals from '../data/animals'
import BreadCrumbs from '../components/BreadCrumbs.vue'

export default {
    name:'ViseZivotinjaView',
    components:{BreadCrumbs},
    data(){
        return{
            sveZivotinje : animals,
            zivotinjeZaPrikaz: animals,
            ime:'',
            godine : '',
            tip:'',
        }
    },
    computed:{
        pretraga(){
            if(this.ime!='') return this.sveZivotinje.filter(z=> z.ime.includes(this.ime));
            if(this.godine!='') return this.sveZivotinje.filter(z=> z.godine == this.godine)
            else {
                
                return this.sveZivotinje;
            }
        }
    },
    created() {
        if (this.$route.params.vrsta == 'Kuce') {
            this.prikazPsi();
        }
        else if (this.$route.params.vrsta == 'Mace') {
            this.prikazMacke();
        } 
        else if (this.$route.params.vrsta == 'Ptice') {
            this.prikazPtice();
        }
    },
    methods: {
        viseDetalja(id) {
            this.$router.push(
                { path: `/SveZivotinje/${this.$route.params.vrsta}/${id}`})
        },
        sortirajNaziv(){
            function uporediNaziv(a, b) {
            if (a.ime < b.ime)
                return -1;
            if (a.ime > b.ime)
                return 1;
            return 0;
            }
         this.sveZivotinje.sort(uporediNaziv);
     },
    

     sortirajGodine(){
            function uporediGodine(a, b) {
            if (a.godine < b.godine)
                return -1;
            if (a.godine > b.godine)
                return 1;
            return 0;
            }
         this.sveZivotinje.sort(uporediGodine);
     },

     prikazPsi(){
         this.sveZivotinje=animals.filter(z=>z.vrsta==1);
     },

     prikazMacke(){
          this.sveZivotinje=animals.filter(z=>z.vrsta==2);
     },

    prikazPtice(){
        this.sveZivotinje=animals.filter(z=>z.vrsta==3);
    }

    },
}
 
</script>