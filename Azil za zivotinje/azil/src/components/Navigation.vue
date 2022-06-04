<template>
<div>
    <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Azil</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse center" id="navbarNav">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <router-link to="/"><a class="nav-link" href="#">Pocetna</a></router-link>
        </li>
        <li class="nav-item">
         <router-link to="/zivotinje"><a class="nav-link" href="#">Zivotinje</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/izgubljeniLjubimci"><a class="nav-link" href="#">Izgubljeni Ljubimci</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dodajOglas"><a class="nav-link" href="#">Dodaj oglas</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mojNalog"><a class="nav-link" href="#">Moj Nalog</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/oNama"><a class="nav-link" href="#">O Nama</a></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<style>
    .bg-light{
        background-color: white !important;
    }
    .center{
        display: flex;
        justify-content: center;
    }
    a:link { text-decoration: none; }
    .nav-link{
        font-size: 22px;
        color:darkgray !important;
    }
    .nav-link:hover{
        font-size: 24px;
        color:black !important;
    }
    .navbar-brand{
        font-size: 32px;
    }

</style>

<script>
 export default{
     name:"Navigation"
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