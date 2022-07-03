<template>
<div class="">
    <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
  <nav class="navbar navbar-expand-xl fixed-top navbar-light my-bg-light notprintable">
  <div class="container-fluid">
    <a class="navbar-brand brand" href="#" translate="no">
        Woof
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" @click="select('pocetna')">
          <router-link to="/"><a class="nav-link" id="pocetna" href="#">Početna</a></router-link>
        </li>
        <li class="nav-item" @click="select('zivotinje')" >
         <router-link to="/zivotinje"><a class="nav-link" id="zivotinje" href="#">Životinje</a></router-link>
        </li>
        <li class="nav-item" @click="select('izgubljeniLjubimci')" >
          <router-link to="/izgubljeniLjubimci"><a class="nav-link" id="izgubljeniLjubimci" href="#">Izgubljene Životinje</a></router-link>
        </li>
        <li class="nav-item" @click="select('dodajOglas')">
          <router-link to="/dodajOglas"><a class="nav-link" id="dodajOglas" href="#">Dodaj oglas</a></router-link>
        </li>
        <li class="nav-item" @click="select('mojNalog')">
          <router-link to="/mojNalog"><a class="nav-link" id="mojNalog" href="#">Moj Nalog</a></router-link>
        </li>
        <li class="nav-item" @click="select('oNama')">
          <router-link to="/oNama"><a class="nav-link" id="oNama" href="#">O Nama</a></router-link>
        </li>
      </ul>
      
    </div>
    <div id="google_translate_element"></div>
  </div>
</nav>
</div>
</template>

<style>
    .my-bg-light{
        background-color: white !important;
    }
    .center{
        display: flex;
        justify-content: center;
    }
    a:link { text-decoration: none; }
    .nav-link{
        font-size: 28px;
        color:black !important;
        font-family: 'Ubuntu', sans-serif;
        white-space: nowrap !important;
    }
    .nav-link:hover{
        font-size: 30px;
        color: rgb(113, 180, 141) !important;
    }
    .nav-link-selected{
        font-size: 32px;
        color:rgb(113, 180, 141) !important;
    }
    .navbar-brand{
        font-size: 42px !important;
        color: black !important;
        font-family: 'Fredoka One', cursive;
    }
    .brand{
      color: black !important;
    }
    #google_translate_element select{
 background:#f6edfd;
 color:#383ffa;
 border: none;
 border-radius:3px;
 padding:6px 8px
 }
 .goog-logo-link{
   display:none!important;
  }
 .goog-te-gadget{
 color:transparent!important;
 } 
 .goog-te-banner-frame{
 display:none !important;
 }
 
 #goog-gt-tt, .goog-te-balloon-frame{display: none !important;}
.goog-text-highlight { background: none !important; box-shadow: none !important;}

</style>

<script>
import $ from "jquery";
 export default{
     name:"Navigation",
     data(){
         return {
            currSelected:-1,
         }
     },
     created(){
        let page = localStorage.getItem('page')
        if (page!=null){
          console.log("eo " + page)
          this.select(page)
        }
     },
     methods: {
        select(idElem){
            console.log("select")
            console.log(idElem+"  aa")
            $(".nav-link").removeClass("nav-link-selected")
            $("#"+idElem).addClass("nav-link-selected")
        }
     },
}

</script>

<!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/pocetna">Pocetna</router-link>
        <router-link to="/zivotinje">Zivotinje</router-link> |
        <router-link to="/izgubljeniLjubimci">Izgubljeni Ljubimci</router-link>
        <router-link to="/dodajOglas">Dodaj oglas</router-link> |
        <router-link to="/mojNalog">Moj Nalog</router-link>
        <router-link to="/oNama">O Nama</router-link>
  </nav> -->