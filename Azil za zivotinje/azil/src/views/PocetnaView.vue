<template>
    <div>
        <div>
            <section id="hero">
                <div class="custom-shape-divider-top-1655817214">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>
            <div class="cont">

                <div class="info">
                    <div class="naslov-div">
                        <h1 class="naslov">Azil&nbsp;</h1>
                        <h1 class="naslov2" translate="no">Woof</h1>
                    </div>
                    
                    <h2 class="opis">Skloniste za nase krznene prijatelje</h2>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1655818722">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="quote" translate="no">“Until one has loved an animal, a part of one’s soul remains unawakened.”</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h2 class="author" translate="no">-Anatole France</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-lg-6 ">
                    <div class="intro-section">
                        <div class="naslov-div">
                            <h2 class="intro-naslov-1">Dobrodosli u &nbsp;</h2>
                            <h2 class="intro-naslov-2">Woof</h2>
                        </div>
                        <br>
                        <div>
                            <h3 class="podnaslov">Misija</h3>
                            <p class="ptext">Da se unapredi bezbednost i dobrobit životinja</p>
                            <h3 class="podnaslov">Vizija</h3>
                            <p class="ptext">Naša vizija je da sve životinje žive život bez okrutosti i patnje</p>
                            <h3 class="podnaslov">Vrednosti</h3>
                            <p class="ptext">Najpre vrednujemo ljubav, poštovanje, saosećanje, svest i integritet u svim aspektima naše misije i vizije za svet bez okrutnosti</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-12 col-lg-6">
                    <section class="corgi-section">
                        <img class="img" src="https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg" alt="aaa">
                        <!-- <div class="custom-shape-divider-bottom-1655841065">
                            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
                            </svg>
                        </div> -->
                    </section>
                    
                </div>

            </div>
            <div class="row">
                <div class="col">
                    
                    <Carousel></Carousel>
                    
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h1 class="vesti">Oglasi</h1>
                    <OglasiPregled :sviOglasi="this.oglasi" :deletable="false" :canprint="false"></OglasiPregled>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Carousel from "../components/Carousel.vue"
    import OglasiPregled from "../components/OglasiPregled.vue"
    import oglasi from '@/data/oglasi'
export default{

    name: "PocetnaView",
    components: {Carousel,OglasiPregled},
    data(){
        return {
            oglasi:[]
        }
    },
    created(){
        document.title = "Početna"
        localStorage.setItem('page','pocetna')
        console.log('poceta!!')
        if(localStorage.getItem("oglasi")==null){
                localStorage.setItem("oglasi",JSON.stringify(oglasi))
            }
        let svi_oglasi = JSON.parse(localStorage.getItem("oglasi"))
        for(let i = svi_oglasi.length-3;i<svi_oglasi.length;i++){
            this.oglasi.push(svi_oglasi[i])
        }
        console.log(this.oglasi)

    }
}

</script>

<style>
.center-div{
    display: flex;
    justify-content: center;
}
.ptext{
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
}
.podnaslov{
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    font-size: 26px;
    font-weight: bold;
}
#hero{
    max-width: 100%;
}
.custom-shape-divider-bottom-1655841065 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1655841065 svg {
    position: relative;
    display: block;
    width: 100%;
    height: 100px;
    transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1655841065 .shape-fill {
    fill: #FFFFFF;
}

    .corgi-section{
        position: relative;
    }
    .intro-section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .intro-section>p{
        font-family: 'Ubuntu', sans-serif;
        font-style: italic;
        max-width: 500px;
        text-align: justify;
    }
    .intro-naslov-1{
        font-family: 'Fredoka One', cursive;
        text-align: left;
        font-size: 32px;
    }
    .intro-naslov-2{
        font-family: 'Fredoka One', cursive;
        text-align: left;
        font-size: 52px;
    }
    .info-txt{
        max-width: 800px !important;
        text-align: justify;
    }
    .img{
        width: 100%;
        border-radius: 20px;
        height: 100%;
    }
    /* .intro-section{
        margin-top: 2rem !important;
    } */
    .naslov-div{
        display: flex;
        align-items: flex-end;
    }
    .naslov{
        font-family: 'Titan One', cursive;
        font-size: 68px;
        color: white;
        text-align: left;
    }
    .naslov2{
        font-family: 'Fredoka One', cursive;
        font-size: 82px;
        color: white;
        text-align: left;
    }
    .opis{
        font-size: 42px;
        color: white;
        font-family: 'Titan One', cursive;
        margin-bottom: 5rem;
    }

    #hero{
        margin-top: 5.5rem;
        width: 100%;
        height: 90vh;
        background: linear-gradient(rgba(255, 255, 255, 0.226),rgba(0, 0, 0, 0.26)), url('../assets/hero-2.webp') no-repeat center/ cover;
        color: black;
        position: relative;
    }
    .cont{
        width: 90%;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content:flex-start;
    }
    .quote{
        text-align: left;
        font-family: 'Oleo Script Swash Caps', cursive;
        /* font-family: 'Poppins', sans-serif; */
        color: black;
        font-size: 54px;
        max-width: 1200px !important;
    }
    .author{
        text-align: right;
        color: black;
        
        font-family: 'Poppins', sans-serif;
        font-size: 40px;
    }



.custom-shape-divider-top-1655817214 svg {
    position: relative;
    display: block;
    width: 100%;
    height: 96px;
}

.custom-shape-divider-top-1655817214 .shape-fill {
    fill: #FFFFFF;
}
.custom-shape-divider-bottom-1655818722 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-bottom-1655818722 svg {
    position: relative;
    display: block;
    width: 100%;
    height: 96px;
}

.custom-shape-divider-bottom-1655818722 .shape-fill {
    fill: #FFFFFF;
}


</style>


