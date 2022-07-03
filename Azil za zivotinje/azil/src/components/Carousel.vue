<template>
    <div class="marg-top">
        <h2 class="vesti">Vesti</h2>
            <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="5000">
      <img src="https://wallpaperaccess.com/full/2480153.jpg" class="d-block w-100 img-c" alt="...">
      <div class="carousel-caption d-none d-md-block c-back">
        <h5 class="c-title">Bernadinac Bane proglašen za najmaznijeg ove godine</h5>
        <p class="c-text">Ovaj veliki momak se stvarno pokazao kao još veća maza. U regionalnom takmičenju iz više disciplina generalnog maženja Bane se pokaza odlično u svim disciplinama...</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://wallpaperaccess.com/full/1209272.jpg" class="d-block w-100 img-c" alt="...">
      <div class="carousel-caption d-none d-md-block c-back">
        <h5 class="c-title">Kako odgajiti mače?</h5>
        <p class="c-text">Male mačke su vrlo znatiželjna i šašava stvorenja, i potrebno je dosta pažnje da bi se adekvatno odgajali...</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="5000">
      <img src="https://img.freepik.com/free-photo/cute-capybara-farm-is-taking-bath_361141-876.jpg?w=2000" class="d-block w-100 img-c" alt="...">
      <div class="carousel-caption d-none d-md-block c-back">
        <h5 class="c-title">Pas ili kokos?</h5>
        <p class="c-text">Kapibarе - ova šašava stvorenja su osvojila internet...</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    </div>    

</template>

<style>
.c-back{
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    margin-bottom: 2rem;
}
    .c-title{
        color: white;
        text-align: left;
        font-family: 'Ubuntu', sans-serif;
        font-size: 32px;
        font-weight: bold;
    }
    .c-text{
        color: white !important;
        font-size: 18px;
        text-align: left;
        margin: 0rem !important;
    }
    .img-c{
        height: 600px;
    }
    .marg-top{
        margin-top:2rem ;
        
    }
    .vesti{
        font-family: 'Ubuntu', sans-serif;
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }
</style>

<script>

    export default{
        name: "Carousel"
    }
</script>